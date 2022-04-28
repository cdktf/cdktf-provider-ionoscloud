// https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface K8SNodePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * When set to true, allows the update of immutable fields by destroying and re-creating the node pool
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#allow_replace K8SNodePool#allow_replace}
  */
  readonly allowReplace?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#annotations K8SNodePool#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The compute availability zone in which the nodes should exist
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#availability_zone K8SNodePool#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * CPU cores count
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#cores_count K8SNodePool#cores_count}
  */
  readonly coresCount: number;
  /**
  * CPU Family
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#cpu_family K8SNodePool#cpu_family}
  */
  readonly cpuFamily: string;
  /**
  * The UUID of the VDC
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#datacenter_id K8SNodePool#datacenter_id}
  */
  readonly datacenterId: string;
  /**
  * Public IP address for the gateway performing source NAT for the node pool's nodes belonging to a private cluster. Required only if the node pool belongs to a private cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#gateway_ip K8SNodePool#gateway_ip}
  */
  readonly gatewayIp?: string;
  /**
  * The UUID of an existing kubernetes cluster
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#k8s_cluster_id K8SNodePool#k8s_cluster_id}
  */
  readonly k8SClusterId: string;
  /**
  * The desired kubernetes version
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#k8s_version K8SNodePool#k8s_version}
  */
  readonly k8SVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#labels K8SNodePool#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The desired name for the node pool
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#name K8SNodePool#name}
  */
  readonly name: string;
  /**
  * The number of nodes in this node pool
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#node_count K8SNodePool#node_count}
  */
  readonly nodeCount: number;
  /**
  * A list of fixed IPs. Cannot be set on private clusters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#public_ips K8SNodePool#public_ips}
  */
  readonly publicIps?: string[];
  /**
  * The amount of RAM in MB
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#ram_size K8SNodePool#ram_size}
  */
  readonly ramSize: number;
  /**
  * The total allocated storage capacity of a node in GB
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#storage_size K8SNodePool#storage_size}
  */
  readonly storageSize: number;
  /**
  * Storage type to use
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#storage_type K8SNodePool#storage_type}
  */
  readonly storageType: string;
  /**
  * auto_scaling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#auto_scaling K8SNodePool#auto_scaling}
  */
  readonly autoScaling?: K8SNodePoolAutoScaling;
  /**
  * lans block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#lans K8SNodePool#lans}
  */
  readonly lans?: K8SNodePoolLans[] | cdktf.IResolvable;
  /**
  * maintenance_window block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#maintenance_window K8SNodePool#maintenance_window}
  */
  readonly maintenanceWindow?: K8SNodePoolMaintenanceWindow;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#timeouts K8SNodePool#timeouts}
  */
  readonly timeouts?: K8SNodePoolTimeouts;
}
export interface K8SNodePoolAutoScaling {
  /**
  * The maximum number of worker nodes that the node pool can scale to. Should be greater than min_node_count
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#max_node_count K8SNodePool#max_node_count}
  */
  readonly maxNodeCount: number;
  /**
  * The minimum number of worker nodes the node pool can scale down to. Should be less than max_node_count
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#min_node_count K8SNodePool#min_node_count}
  */
  readonly minNodeCount: number;
}

export function k8SNodePoolAutoScalingToTerraform(struct?: K8SNodePoolAutoScalingOutputReference | K8SNodePoolAutoScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_node_count: cdktf.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktf.numberToTerraform(struct!.minNodeCount),
  }
}

export class K8SNodePoolAutoScalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SNodePoolAutoScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodeCount = this._maxNodeCount;
    }
    if (this._minNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCount = this._minNodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SNodePoolAutoScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxNodeCount = undefined;
      this._minNodeCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxNodeCount = value.maxNodeCount;
      this._minNodeCount = value.minNodeCount;
    }
  }

  // max_node_count - computed: false, optional: false, required: true
  private _maxNodeCount?: number; 
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }
  public set maxNodeCount(value: number) {
    this._maxNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount;
  }

  // min_node_count - computed: false, optional: false, required: true
  private _minNodeCount?: number; 
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
  public set minNodeCount(value: number) {
    this._minNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCountInput() {
    return this._minNodeCount;
  }
}
export interface K8SNodePoolLansRoutes {
  /**
  * IPv4 or IPv6 Gateway IP for the route
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#gateway_ip K8SNodePool#gateway_ip}
  */
  readonly gatewayIp: string;
  /**
  * IPv4 or IPv6 CIDR to be routed via the interface
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#network K8SNodePool#network}
  */
  readonly network: string;
}

export function k8SNodePoolLansRoutesToTerraform(struct?: K8SNodePoolLansRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway_ip: cdktf.stringToTerraform(struct!.gatewayIp),
    network: cdktf.stringToTerraform(struct!.network),
  }
}

export interface K8SNodePoolLans {
  /**
  * Indicates if the Kubernetes Node Pool LAN will reserve an IP using DHCP
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#dhcp K8SNodePool#dhcp}
  */
  readonly dhcp?: boolean | cdktf.IResolvable;
  /**
  * The LAN ID of an existing LAN at the related datacenter
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#id K8SNodePool#id}
  */
  readonly id: number;
  /**
  * routes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#routes K8SNodePool#routes}
  */
  readonly routes?: K8SNodePoolLansRoutes[] | cdktf.IResolvable;
}

export function k8SNodePoolLansToTerraform(struct?: K8SNodePoolLans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp: cdktf.booleanToTerraform(struct!.dhcp),
    id: cdktf.numberToTerraform(struct!.id),
    routes: cdktf.listMapper(k8SNodePoolLansRoutesToTerraform)(struct!.routes),
  }
}

export interface K8SNodePoolMaintenanceWindow {
  /**
  * Day of the week when maintenance is allowed
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#day_of_the_week K8SNodePool#day_of_the_week}
  */
  readonly dayOfTheWeek: string;
  /**
  * A clock time in the day when maintenance is allowed
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#time K8SNodePool#time}
  */
  readonly time: string;
}

export function k8SNodePoolMaintenanceWindowToTerraform(struct?: K8SNodePoolMaintenanceWindowOutputReference | K8SNodePoolMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_the_week: cdktf.stringToTerraform(struct!.dayOfTheWeek),
    time: cdktf.stringToTerraform(struct!.time),
  }
}

export class K8SNodePoolMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SNodePoolMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfTheWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfTheWeek = this._dayOfTheWeek;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SNodePoolMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfTheWeek = undefined;
      this._time = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfTheWeek = value.dayOfTheWeek;
      this._time = value.time;
    }
  }

  // day_of_the_week - computed: false, optional: false, required: true
  private _dayOfTheWeek?: string; 
  public get dayOfTheWeek() {
    return this.getStringAttribute('day_of_the_week');
  }
  public set dayOfTheWeek(value: string) {
    this._dayOfTheWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfTheWeekInput() {
    return this._dayOfTheWeek;
  }

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}
export interface K8SNodePoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#create K8SNodePool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#default K8SNodePool#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#delete K8SNodePool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool#update K8SNodePool#update}
  */
  readonly update?: string;
}

export function k8SNodePoolTimeoutsToTerraform(struct?: K8SNodePoolTimeoutsOutputReference | K8SNodePoolTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class K8SNodePoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SNodePoolTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SNodePoolTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool ionoscloud_k8s_node_pool}
*/
export class K8SNodePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_k8s_node_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_node_pool ionoscloud_k8s_node_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K8SNodePoolConfig
  */
  public constructor(scope: Construct, id: string, config: K8SNodePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_k8s_node_pool',
      terraformGeneratorMetadata: {
        providerName: 'ionoscloud',
        providerVersion: '6.2.3',
        providerVersionConstraint: '~> 6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowReplace = config.allowReplace;
    this._annotations = config.annotations;
    this._availabilityZone = config.availabilityZone;
    this._coresCount = config.coresCount;
    this._cpuFamily = config.cpuFamily;
    this._datacenterId = config.datacenterId;
    this._gatewayIp = config.gatewayIp;
    this._k8SClusterId = config.k8SClusterId;
    this._k8SVersion = config.k8SVersion;
    this._labels = config.labels;
    this._name = config.name;
    this._nodeCount = config.nodeCount;
    this._publicIps = config.publicIps;
    this._ramSize = config.ramSize;
    this._storageSize = config.storageSize;
    this._storageType = config.storageType;
    this._autoScaling.internalValue = config.autoScaling;
    this._lans = config.lans;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_replace - computed: false, optional: true, required: false
  private _allowReplace?: boolean | cdktf.IResolvable; 
  public get allowReplace() {
    return this.getBooleanAttribute('allow_replace');
  }
  public set allowReplace(value: boolean | cdktf.IResolvable) {
    this._allowReplace = value;
  }
  public resetAllowReplace() {
    this._allowReplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowReplaceInput() {
    return this._allowReplace;
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // cores_count - computed: false, optional: false, required: true
  private _coresCount?: number; 
  public get coresCount() {
    return this.getNumberAttribute('cores_count');
  }
  public set coresCount(value: number) {
    this._coresCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coresCountInput() {
    return this._coresCount;
  }

  // cpu_family - computed: false, optional: false, required: true
  private _cpuFamily?: string; 
  public get cpuFamily() {
    return this.getStringAttribute('cpu_family');
  }
  public set cpuFamily(value: string) {
    this._cpuFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuFamilyInput() {
    return this._cpuFamily;
  }

  // datacenter_id - computed: false, optional: false, required: true
  private _datacenterId?: string; 
  public get datacenterId() {
    return this.getStringAttribute('datacenter_id');
  }
  public set datacenterId(value: string) {
    this._datacenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
  }

  // gateway_ip - computed: false, optional: true, required: false
  private _gatewayIp?: string; 
  public get gatewayIp() {
    return this.getStringAttribute('gateway_ip');
  }
  public set gatewayIp(value: string) {
    this._gatewayIp = value;
  }
  public resetGatewayIp() {
    this._gatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpInput() {
    return this._gatewayIp;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // k8s_cluster_id - computed: false, optional: false, required: true
  private _k8SClusterId?: string; 
  public get k8SClusterId() {
    return this.getStringAttribute('k8s_cluster_id');
  }
  public set k8SClusterId(value: string) {
    this._k8SClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SClusterIdInput() {
    return this._k8SClusterId;
  }

  // k8s_version - computed: false, optional: false, required: true
  private _k8SVersion?: string; 
  public get k8SVersion() {
    return this.getStringAttribute('k8s_version');
  }
  public set k8SVersion(value: string) {
    this._k8SVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SVersionInput() {
    return this._k8SVersion;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // public_ips - computed: false, optional: true, required: false
  private _publicIps?: string[]; 
  public get publicIps() {
    return this.getListAttribute('public_ips');
  }
  public set publicIps(value: string[]) {
    this._publicIps = value;
  }
  public resetPublicIps() {
    this._publicIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpsInput() {
    return this._publicIps;
  }

  // ram_size - computed: false, optional: false, required: true
  private _ramSize?: number; 
  public get ramSize() {
    return this.getNumberAttribute('ram_size');
  }
  public set ramSize(value: number) {
    this._ramSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ramSizeInput() {
    return this._ramSize;
  }

  // storage_size - computed: false, optional: false, required: true
  private _storageSize?: number; 
  public get storageSize() {
    return this.getNumberAttribute('storage_size');
  }
  public set storageSize(value: number) {
    this._storageSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeInput() {
    return this._storageSize;
  }

  // storage_type - computed: false, optional: false, required: true
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // auto_scaling - computed: false, optional: true, required: false
  private _autoScaling = new K8SNodePoolAutoScalingOutputReference(this, "auto_scaling");
  public get autoScaling() {
    return this._autoScaling;
  }
  public putAutoScaling(value: K8SNodePoolAutoScaling) {
    this._autoScaling.internalValue = value;
  }
  public resetAutoScaling() {
    this._autoScaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingInput() {
    return this._autoScaling.internalValue;
  }

  // lans - computed: false, optional: true, required: false
  private _lans?: K8SNodePoolLans[] | cdktf.IResolvable; 
  public get lans() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('lans')));
  }
  public set lans(value: K8SNodePoolLans[] | cdktf.IResolvable) {
    this._lans = value;
  }
  public resetLans() {
    this._lans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lansInput() {
    return this._lans;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new K8SNodePoolMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: K8SNodePoolMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new K8SNodePoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: K8SNodePoolTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_replace: cdktf.booleanToTerraform(this._allowReplace),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      cores_count: cdktf.numberToTerraform(this._coresCount),
      cpu_family: cdktf.stringToTerraform(this._cpuFamily),
      datacenter_id: cdktf.stringToTerraform(this._datacenterId),
      gateway_ip: cdktf.stringToTerraform(this._gatewayIp),
      k8s_cluster_id: cdktf.stringToTerraform(this._k8SClusterId),
      k8s_version: cdktf.stringToTerraform(this._k8SVersion),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      public_ips: cdktf.listMapper(cdktf.stringToTerraform)(this._publicIps),
      ram_size: cdktf.numberToTerraform(this._ramSize),
      storage_size: cdktf.numberToTerraform(this._storageSize),
      storage_type: cdktf.stringToTerraform(this._storageType),
      auto_scaling: k8SNodePoolAutoScalingToTerraform(this._autoScaling.internalValue),
      lans: cdktf.listMapper(k8SNodePoolLansToTerraform)(this._lans),
      maintenance_window: k8SNodePoolMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      timeouts: k8SNodePoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
