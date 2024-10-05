# `k8SNodePool` Submodule <a name="`k8SNodePool` Submodule" id="@cdktf/provider-ionoscloud.k8SNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### K8SNodePool <a name="K8SNodePool" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool ionoscloud_k8s_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_node_pool

k8SNodePool.K8SNodePool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_zone: str,
  cores_count: typing.Union[int, float],
  cpu_family: str,
  datacenter_id: str,
  k8_s_cluster_id: str,
  k8_s_version: str,
  name: str,
  node_count: typing.Union[int, float],
  ram_size: typing.Union[int, float],
  storage_size: typing.Union[int, float],
  storage_type: str,
  allow_replace: typing.Union[bool, IResolvable] = None,
  annotations: typing.Mapping[str] = None,
  auto_scaling: K8SNodePoolAutoScaling = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  lans: typing.Union[IResolvable, typing.List[K8SNodePoolLans]] = None,
  maintenance_window: K8SNodePoolMaintenanceWindow = None,
  public_ips: typing.List[str] = None,
  timeouts: K8SNodePoolTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | The compute availability zone in which the nodes should exist. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.coresCount">cores_count</a></code> | <code>typing.Union[int, float]</code> | CPU cores count. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.cpuFamily">cpu_family</a></code> | <code>str</code> | CPU Family. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.datacenterId">datacenter_id</a></code> | <code>str</code> | The UUID of the VDC. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.k8SClusterId">k8_s_cluster_id</a></code> | <code>str</code> | The UUID of an existing kubernetes cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.k8SVersion">k8_s_version</a></code> | <code>str</code> | The desired Kubernetes Version. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.name">name</a></code> | <code>str</code> | The desired name for the node pool. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | The number of nodes in this node pool. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.ramSize">ram_size</a></code> | <code>typing.Union[int, float]</code> | The amount of RAM in MB. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.storageSize">storage_size</a></code> | <code>typing.Union[int, float]</code> | The total allocated storage capacity of a node in GB. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.storageType">storage_type</a></code> | <code>str</code> | Storage type to use. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.allowReplace">allow_replace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true, allows the update of immutable fields by destroying and re-creating the node pool. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#annotations K8SNodePool#annotations}. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.autoScaling">auto_scaling</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScaling">K8SNodePoolAutoScaling</a></code> | auto_scaling block. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#id K8SNodePool#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#labels K8SNodePool#labels}. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.lans">lans</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLans">K8SNodePoolLans</a>]]</code> | lans block. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindow">K8SNodePoolMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.publicIps">public_ips</a></code> | <code>typing.List[str]</code> | A list of fixed IPs. Cannot be set on private clusters. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts">K8SNodePoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.availabilityZone"></a>

- *Type:* str

The compute availability zone in which the nodes should exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#availability_zone K8SNodePool#availability_zone}

---

##### `cores_count`<sup>Required</sup> <a name="cores_count" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.coresCount"></a>

- *Type:* typing.Union[int, float]

CPU cores count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#cores_count K8SNodePool#cores_count}

---

##### `cpu_family`<sup>Required</sup> <a name="cpu_family" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.cpuFamily"></a>

- *Type:* str

CPU Family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#cpu_family K8SNodePool#cpu_family}

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.datacenterId"></a>

- *Type:* str

The UUID of the VDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#datacenter_id K8SNodePool#datacenter_id}

---

##### `k8_s_cluster_id`<sup>Required</sup> <a name="k8_s_cluster_id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.k8SClusterId"></a>

- *Type:* str

The UUID of an existing kubernetes cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#k8s_cluster_id K8SNodePool#k8s_cluster_id}

---

##### `k8_s_version`<sup>Required</sup> <a name="k8_s_version" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.k8SVersion"></a>

- *Type:* str

The desired Kubernetes Version.

For supported values, please check the API documentation. Downgrades are not supported. The provider will ignore downgrades of patch level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#k8s_version K8SNodePool#k8s_version}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.name"></a>

- *Type:* str

The desired name for the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#name K8SNodePool#name}

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

The number of nodes in this node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#node_count K8SNodePool#node_count}

---

##### `ram_size`<sup>Required</sup> <a name="ram_size" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.ramSize"></a>

- *Type:* typing.Union[int, float]

The amount of RAM in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#ram_size K8SNodePool#ram_size}

---

##### `storage_size`<sup>Required</sup> <a name="storage_size" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.storageSize"></a>

- *Type:* typing.Union[int, float]

The total allocated storage capacity of a node in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#storage_size K8SNodePool#storage_size}

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.storageType"></a>

- *Type:* str

Storage type to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#storage_type K8SNodePool#storage_type}

---

##### `allow_replace`<sup>Optional</sup> <a name="allow_replace" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.allowReplace"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, allows the update of immutable fields by destroying and re-creating the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#allow_replace K8SNodePool#allow_replace}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#annotations K8SNodePool#annotations}.

---

##### `auto_scaling`<sup>Optional</sup> <a name="auto_scaling" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.autoScaling"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScaling">K8SNodePoolAutoScaling</a>

auto_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#auto_scaling K8SNodePool#auto_scaling}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#id K8SNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#labels K8SNodePool#labels}.

---

##### `lans`<sup>Optional</sup> <a name="lans" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.lans"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLans">K8SNodePoolLans</a>]]

lans block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#lans K8SNodePool#lans}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindow">K8SNodePoolMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#maintenance_window K8SNodePool#maintenance_window}

---

##### `public_ips`<sup>Optional</sup> <a name="public_ips" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.publicIps"></a>

- *Type:* typing.List[str]

A list of fixed IPs. Cannot be set on private clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#public_ips K8SNodePool#public_ips}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts">K8SNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#timeouts K8SNodePool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.putAutoScaling">put_auto_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.putLans">put_lans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.putMaintenanceWindow">put_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetAllowReplace">reset_allow_replace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetAutoScaling">reset_auto_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetLans">reset_lans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetPublicIps">reset_public_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auto_scaling` <a name="put_auto_scaling" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.putAutoScaling"></a>

```python
def put_auto_scaling(
  max_node_count: typing.Union[int, float],
  min_node_count: typing.Union[int, float]
) -> None
```

###### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.putAutoScaling.parameter.maxNodeCount"></a>

- *Type:* typing.Union[int, float]

The maximum number of worker nodes that the node pool can scale to. Should be greater than min_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#max_node_count K8SNodePool#max_node_count}

---

###### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.putAutoScaling.parameter.minNodeCount"></a>

- *Type:* typing.Union[int, float]

The minimum number of worker nodes the node pool can scale down to. Should be less than max_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#min_node_count K8SNodePool#min_node_count}

---

##### `put_lans` <a name="put_lans" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.putLans"></a>

```python
def put_lans(
  value: typing.Union[IResolvable, typing.List[K8SNodePoolLans]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.putLans.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLans">K8SNodePoolLans</a>]]

---

##### `put_maintenance_window` <a name="put_maintenance_window" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.putMaintenanceWindow"></a>

```python
def put_maintenance_window(
  day_of_the_week: str,
  time: str
) -> None
```

###### `day_of_the_week`<sup>Required</sup> <a name="day_of_the_week" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.putMaintenanceWindow.parameter.dayOfTheWeek"></a>

- *Type:* str

Day of the week when maintenance is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#day_of_the_week K8SNodePool#day_of_the_week}

---

###### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.putMaintenanceWindow.parameter.time"></a>

- *Type:* str

A clock time in the day when maintenance is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#time K8SNodePool#time}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#create K8SNodePool#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#default K8SNodePool#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#delete K8SNodePool#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#update K8SNodePool#update}.

---

##### `reset_allow_replace` <a name="reset_allow_replace" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetAllowReplace"></a>

```python
def reset_allow_replace() -> None
```

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_auto_scaling` <a name="reset_auto_scaling" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetAutoScaling"></a>

```python
def reset_auto_scaling() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_lans` <a name="reset_lans" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetLans"></a>

```python
def reset_lans() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_public_ips` <a name="reset_public_ips" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetPublicIps"></a>

```python
def reset_public_ips() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a K8SNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_node_pool

k8SNodePool.K8SNodePool.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_node_pool

k8SNodePool.K8SNodePool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_node_pool

k8SNodePool.K8SNodePool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_node_pool

k8SNodePool.K8SNodePool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a K8SNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the K8SNodePool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing K8SNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the K8SNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.autoScaling">auto_scaling</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference">K8SNodePoolAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.lans">lans</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList">K8SNodePoolLansList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference">K8SNodePoolMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference">K8SNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.allowReplaceInput">allow_replace_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.autoScalingInput">auto_scaling_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScaling">K8SNodePoolAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.coresCountInput">cores_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.cpuFamilyInput">cpu_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.datacenterIdInput">datacenter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.k8SClusterIdInput">k8_s_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.k8SVersionInput">k8_s_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.lansInput">lans_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLans">K8SNodePoolLans</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindow">K8SNodePoolMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.publicIpsInput">public_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.ramSizeInput">ram_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.storageSizeInput">storage_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.storageTypeInput">storage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts">K8SNodePoolTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.allowReplace">allow_replace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.coresCount">cores_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.cpuFamily">cpu_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.datacenterId">datacenter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.k8SClusterId">k8_s_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.k8SVersion">k8_s_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.publicIps">public_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.ramSize">ram_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.storageSize">storage_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auto_scaling`<sup>Required</sup> <a name="auto_scaling" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.autoScaling"></a>

```python
auto_scaling: K8SNodePoolAutoScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference">K8SNodePoolAutoScalingOutputReference</a>

---

##### `lans`<sup>Required</sup> <a name="lans" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.lans"></a>

```python
lans: K8SNodePoolLansList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList">K8SNodePoolLansList</a>

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.maintenanceWindow"></a>

```python
maintenance_window: K8SNodePoolMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference">K8SNodePoolMaintenanceWindowOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.timeouts"></a>

```python
timeouts: K8SNodePoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference">K8SNodePoolTimeoutsOutputReference</a>

---

##### `allow_replace_input`<sup>Optional</sup> <a name="allow_replace_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.allowReplaceInput"></a>

```python
allow_replace_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `auto_scaling_input`<sup>Optional</sup> <a name="auto_scaling_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.autoScalingInput"></a>

```python
auto_scaling_input: K8SNodePoolAutoScaling
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScaling">K8SNodePoolAutoScaling</a>

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `cores_count_input`<sup>Optional</sup> <a name="cores_count_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.coresCountInput"></a>

```python
cores_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_family_input`<sup>Optional</sup> <a name="cpu_family_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.cpuFamilyInput"></a>

```python
cpu_family_input: str
```

- *Type:* str

---

##### `datacenter_id_input`<sup>Optional</sup> <a name="datacenter_id_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.datacenterIdInput"></a>

```python
datacenter_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `k8_s_cluster_id_input`<sup>Optional</sup> <a name="k8_s_cluster_id_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.k8SClusterIdInput"></a>

```python
k8_s_cluster_id_input: str
```

- *Type:* str

---

##### `k8_s_version_input`<sup>Optional</sup> <a name="k8_s_version_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.k8SVersionInput"></a>

```python
k8_s_version_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `lans_input`<sup>Optional</sup> <a name="lans_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.lansInput"></a>

```python
lans_input: typing.Union[IResolvable, typing.List[K8SNodePoolLans]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLans">K8SNodePoolLans</a>]]

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: K8SNodePoolMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindow">K8SNodePoolMaintenanceWindow</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `public_ips_input`<sup>Optional</sup> <a name="public_ips_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.publicIpsInput"></a>

```python
public_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ram_size_input`<sup>Optional</sup> <a name="ram_size_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.ramSizeInput"></a>

```python
ram_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_size_input`<sup>Optional</sup> <a name="storage_size_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.storageSizeInput"></a>

```python
storage_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_type_input`<sup>Optional</sup> <a name="storage_type_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.storageTypeInput"></a>

```python
storage_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, K8SNodePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts">K8SNodePoolTimeouts</a>]

---

##### `allow_replace`<sup>Required</sup> <a name="allow_replace" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.allowReplace"></a>

```python
allow_replace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `cores_count`<sup>Required</sup> <a name="cores_count" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.coresCount"></a>

```python
cores_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_family`<sup>Required</sup> <a name="cpu_family" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.cpuFamily"></a>

```python
cpu_family: str
```

- *Type:* str

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `k8_s_cluster_id`<sup>Required</sup> <a name="k8_s_cluster_id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.k8SClusterId"></a>

```python
k8_s_cluster_id: str
```

- *Type:* str

---

##### `k8_s_version`<sup>Required</sup> <a name="k8_s_version" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.k8SVersion"></a>

```python
k8_s_version: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `public_ips`<sup>Required</sup> <a name="public_ips" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.publicIps"></a>

```python
public_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ram_size`<sup>Required</sup> <a name="ram_size" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.ramSize"></a>

```python
ram_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_size`<sup>Required</sup> <a name="storage_size" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.storageSize"></a>

```python
storage_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### K8SNodePoolAutoScaling <a name="K8SNodePoolAutoScaling" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScaling.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_node_pool

k8SNodePool.K8SNodePoolAutoScaling(
  max_node_count: typing.Union[int, float],
  min_node_count: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScaling.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | The maximum number of worker nodes that the node pool can scale to. Should be greater than min_node_count. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScaling.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | The minimum number of worker nodes the node pool can scale down to. Should be less than max_node_count. |

---

##### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScaling.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of worker nodes that the node pool can scale to. Should be greater than min_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#max_node_count K8SNodePool#max_node_count}

---

##### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScaling.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of worker nodes the node pool can scale down to. Should be less than max_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#min_node_count K8SNodePool#min_node_count}

---

### K8SNodePoolConfig <a name="K8SNodePoolConfig" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_node_pool

k8SNodePool.K8SNodePoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_zone: str,
  cores_count: typing.Union[int, float],
  cpu_family: str,
  datacenter_id: str,
  k8_s_cluster_id: str,
  k8_s_version: str,
  name: str,
  node_count: typing.Union[int, float],
  ram_size: typing.Union[int, float],
  storage_size: typing.Union[int, float],
  storage_type: str,
  allow_replace: typing.Union[bool, IResolvable] = None,
  annotations: typing.Mapping[str] = None,
  auto_scaling: K8SNodePoolAutoScaling = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  lans: typing.Union[IResolvable, typing.List[K8SNodePoolLans]] = None,
  maintenance_window: K8SNodePoolMaintenanceWindow = None,
  public_ips: typing.List[str] = None,
  timeouts: K8SNodePoolTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | The compute availability zone in which the nodes should exist. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.coresCount">cores_count</a></code> | <code>typing.Union[int, float]</code> | CPU cores count. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.cpuFamily">cpu_family</a></code> | <code>str</code> | CPU Family. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.datacenterId">datacenter_id</a></code> | <code>str</code> | The UUID of the VDC. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.k8SClusterId">k8_s_cluster_id</a></code> | <code>str</code> | The UUID of an existing kubernetes cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.k8SVersion">k8_s_version</a></code> | <code>str</code> | The desired Kubernetes Version. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.name">name</a></code> | <code>str</code> | The desired name for the node pool. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | The number of nodes in this node pool. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.ramSize">ram_size</a></code> | <code>typing.Union[int, float]</code> | The amount of RAM in MB. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.storageSize">storage_size</a></code> | <code>typing.Union[int, float]</code> | The total allocated storage capacity of a node in GB. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.storageType">storage_type</a></code> | <code>str</code> | Storage type to use. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.allowReplace">allow_replace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true, allows the update of immutable fields by destroying and re-creating the node pool. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#annotations K8SNodePool#annotations}. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.autoScaling">auto_scaling</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScaling">K8SNodePoolAutoScaling</a></code> | auto_scaling block. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#id K8SNodePool#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#labels K8SNodePool#labels}. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.lans">lans</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLans">K8SNodePoolLans</a>]]</code> | lans block. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindow">K8SNodePoolMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.publicIps">public_ips</a></code> | <code>typing.List[str]</code> | A list of fixed IPs. Cannot be set on private clusters. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts">K8SNodePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

The compute availability zone in which the nodes should exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#availability_zone K8SNodePool#availability_zone}

---

##### `cores_count`<sup>Required</sup> <a name="cores_count" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.coresCount"></a>

```python
cores_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

CPU cores count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#cores_count K8SNodePool#cores_count}

---

##### `cpu_family`<sup>Required</sup> <a name="cpu_family" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.cpuFamily"></a>

```python
cpu_family: str
```

- *Type:* str

CPU Family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#cpu_family K8SNodePool#cpu_family}

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

The UUID of the VDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#datacenter_id K8SNodePool#datacenter_id}

---

##### `k8_s_cluster_id`<sup>Required</sup> <a name="k8_s_cluster_id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.k8SClusterId"></a>

```python
k8_s_cluster_id: str
```

- *Type:* str

The UUID of an existing kubernetes cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#k8s_cluster_id K8SNodePool#k8s_cluster_id}

---

##### `k8_s_version`<sup>Required</sup> <a name="k8_s_version" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.k8SVersion"></a>

```python
k8_s_version: str
```

- *Type:* str

The desired Kubernetes Version.

For supported values, please check the API documentation. Downgrades are not supported. The provider will ignore downgrades of patch level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#k8s_version K8SNodePool#k8s_version}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The desired name for the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#name K8SNodePool#name}

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of nodes in this node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#node_count K8SNodePool#node_count}

---

##### `ram_size`<sup>Required</sup> <a name="ram_size" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.ramSize"></a>

```python
ram_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of RAM in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#ram_size K8SNodePool#ram_size}

---

##### `storage_size`<sup>Required</sup> <a name="storage_size" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.storageSize"></a>

```python
storage_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The total allocated storage capacity of a node in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#storage_size K8SNodePool#storage_size}

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

Storage type to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#storage_type K8SNodePool#storage_type}

---

##### `allow_replace`<sup>Optional</sup> <a name="allow_replace" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.allowReplace"></a>

```python
allow_replace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, allows the update of immutable fields by destroying and re-creating the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#allow_replace K8SNodePool#allow_replace}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#annotations K8SNodePool#annotations}.

---

##### `auto_scaling`<sup>Optional</sup> <a name="auto_scaling" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.autoScaling"></a>

```python
auto_scaling: K8SNodePoolAutoScaling
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScaling">K8SNodePoolAutoScaling</a>

auto_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#auto_scaling K8SNodePool#auto_scaling}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#id K8SNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#labels K8SNodePool#labels}.

---

##### `lans`<sup>Optional</sup> <a name="lans" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.lans"></a>

```python
lans: typing.Union[IResolvable, typing.List[K8SNodePoolLans]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLans">K8SNodePoolLans</a>]]

lans block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#lans K8SNodePool#lans}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.maintenanceWindow"></a>

```python
maintenance_window: K8SNodePoolMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindow">K8SNodePoolMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#maintenance_window K8SNodePool#maintenance_window}

---

##### `public_ips`<sup>Optional</sup> <a name="public_ips" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.publicIps"></a>

```python
public_ips: typing.List[str]
```

- *Type:* typing.List[str]

A list of fixed IPs. Cannot be set on private clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#public_ips K8SNodePool#public_ips}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolConfig.property.timeouts"></a>

```python
timeouts: K8SNodePoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts">K8SNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#timeouts K8SNodePool#timeouts}

---

### K8SNodePoolLans <a name="K8SNodePoolLans" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLans"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLans.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_node_pool

k8SNodePool.K8SNodePoolLans(
  id: typing.Union[int, float],
  dhcp: typing.Union[bool, IResolvable] = None,
  routes: typing.Union[IResolvable, typing.List[K8SNodePoolLansRoutes]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLans.property.id">id</a></code> | <code>typing.Union[int, float]</code> | The LAN ID of an existing LAN at the related datacenter. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLans.property.dhcp">dhcp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the Kubernetes Node Pool LAN will reserve an IP using DHCP. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLans.property.routes">routes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutes">K8SNodePoolLansRoutes</a>]]</code> | routes block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLans.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The LAN ID of an existing LAN at the related datacenter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#id K8SNodePool#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `dhcp`<sup>Optional</sup> <a name="dhcp" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLans.property.dhcp"></a>

```python
dhcp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the Kubernetes Node Pool LAN will reserve an IP using DHCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#dhcp K8SNodePool#dhcp}

---

##### `routes`<sup>Optional</sup> <a name="routes" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLans.property.routes"></a>

```python
routes: typing.Union[IResolvable, typing.List[K8SNodePoolLansRoutes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutes">K8SNodePoolLansRoutes</a>]]

routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#routes K8SNodePool#routes}

---

### K8SNodePoolLansRoutes <a name="K8SNodePoolLansRoutes" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutes.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_node_pool

k8SNodePool.K8SNodePoolLansRoutes(
  gateway_ip: str,
  network: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutes.property.gatewayIp">gateway_ip</a></code> | <code>str</code> | IPv4 or IPv6 Gateway IP for the route. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutes.property.network">network</a></code> | <code>str</code> | IPv4 or IPv6 CIDR to be routed via the interface. |

---

##### `gateway_ip`<sup>Required</sup> <a name="gateway_ip" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutes.property.gatewayIp"></a>

```python
gateway_ip: str
```

- *Type:* str

IPv4 or IPv6 Gateway IP for the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#gateway_ip K8SNodePool#gateway_ip}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutes.property.network"></a>

```python
network: str
```

- *Type:* str

IPv4 or IPv6 CIDR to be routed via the interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#network K8SNodePool#network}

---

### K8SNodePoolMaintenanceWindow <a name="K8SNodePoolMaintenanceWindow" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_node_pool

k8SNodePool.K8SNodePoolMaintenanceWindow(
  day_of_the_week: str,
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindow.property.dayOfTheWeek">day_of_the_week</a></code> | <code>str</code> | Day of the week when maintenance is allowed. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindow.property.time">time</a></code> | <code>str</code> | A clock time in the day when maintenance is allowed. |

---

##### `day_of_the_week`<sup>Required</sup> <a name="day_of_the_week" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindow.property.dayOfTheWeek"></a>

```python
day_of_the_week: str
```

- *Type:* str

Day of the week when maintenance is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#day_of_the_week K8SNodePool#day_of_the_week}

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindow.property.time"></a>

```python
time: str
```

- *Type:* str

A clock time in the day when maintenance is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#time K8SNodePool#time}

---

### K8SNodePoolTimeouts <a name="K8SNodePoolTimeouts" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_node_pool

k8SNodePool.K8SNodePoolTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#create K8SNodePool#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#default K8SNodePool#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#delete K8SNodePool#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#update K8SNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#create K8SNodePool#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#default K8SNodePool#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#delete K8SNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/k8s_node_pool#update K8SNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### K8SNodePoolAutoScalingOutputReference <a name="K8SNodePoolAutoScalingOutputReference" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_node_pool

k8SNodePool.K8SNodePoolAutoScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.property.maxNodeCountInput">max_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.property.minNodeCountInput">min_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScaling">K8SNodePoolAutoScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_node_count_input`<sup>Optional</sup> <a name="max_node_count_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.property.maxNodeCountInput"></a>

```python
max_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_node_count_input`<sup>Optional</sup> <a name="min_node_count_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.property.minNodeCountInput"></a>

```python
min_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScalingOutputReference.property.internalValue"></a>

```python
internal_value: K8SNodePoolAutoScaling
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolAutoScaling">K8SNodePoolAutoScaling</a>

---


### K8SNodePoolLansList <a name="K8SNodePoolLansList" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_node_pool

k8SNodePool.K8SNodePoolLansList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> K8SNodePoolLansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLans">K8SNodePoolLans</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[K8SNodePoolLans]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLans">K8SNodePoolLans</a>]]

---


### K8SNodePoolLansOutputReference <a name="K8SNodePoolLansOutputReference" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_node_pool

k8SNodePool.K8SNodePoolLansOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.putRoutes">put_routes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.resetDhcp">reset_dhcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.resetRoutes">reset_routes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_routes` <a name="put_routes" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.putRoutes"></a>

```python
def put_routes(
  value: typing.Union[IResolvable, typing.List[K8SNodePoolLansRoutes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.putRoutes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutes">K8SNodePoolLansRoutes</a>]]

---

##### `reset_dhcp` <a name="reset_dhcp" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.resetDhcp"></a>

```python
def reset_dhcp() -> None
```

##### `reset_routes` <a name="reset_routes" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.resetRoutes"></a>

```python
def reset_routes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.routes">routes</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList">K8SNodePoolLansRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.dhcpInput">dhcp_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.idInput">id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.routesInput">routes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutes">K8SNodePoolLansRoutes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.dhcp">dhcp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLans">K8SNodePoolLans</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `routes`<sup>Required</sup> <a name="routes" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.routes"></a>

```python
routes: K8SNodePoolLansRoutesList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList">K8SNodePoolLansRoutesList</a>

---

##### `dhcp_input`<sup>Optional</sup> <a name="dhcp_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.dhcpInput"></a>

```python
dhcp_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.idInput"></a>

```python
id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `routes_input`<sup>Optional</sup> <a name="routes_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.routesInput"></a>

```python
routes_input: typing.Union[IResolvable, typing.List[K8SNodePoolLansRoutes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutes">K8SNodePoolLansRoutes</a>]]

---

##### `dhcp`<sup>Required</sup> <a name="dhcp" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.dhcp"></a>

```python
dhcp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, K8SNodePoolLans]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLans">K8SNodePoolLans</a>]

---


### K8SNodePoolLansRoutesList <a name="K8SNodePoolLansRoutesList" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_node_pool

k8SNodePool.K8SNodePoolLansRoutesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> K8SNodePoolLansRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutes">K8SNodePoolLansRoutes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[K8SNodePoolLansRoutes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutes">K8SNodePoolLansRoutes</a>]]

---


### K8SNodePoolLansRoutesOutputReference <a name="K8SNodePoolLansRoutesOutputReference" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_node_pool

k8SNodePool.K8SNodePoolLansRoutesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.property.gatewayIpInput">gateway_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.property.gatewayIp">gateway_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutes">K8SNodePoolLansRoutes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gateway_ip_input`<sup>Optional</sup> <a name="gateway_ip_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.property.gatewayIpInput"></a>

```python
gateway_ip_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `gateway_ip`<sup>Required</sup> <a name="gateway_ip" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.property.gatewayIp"></a>

```python
gateway_ip: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, K8SNodePoolLansRoutes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolLansRoutes">K8SNodePoolLansRoutes</a>]

---


### K8SNodePoolMaintenanceWindowOutputReference <a name="K8SNodePoolMaintenanceWindowOutputReference" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_node_pool

k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.property.dayOfTheWeekInput">day_of_the_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.property.dayOfTheWeek">day_of_the_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindow">K8SNodePoolMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_the_week_input`<sup>Optional</sup> <a name="day_of_the_week_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.property.dayOfTheWeekInput"></a>

```python
day_of_the_week_input: str
```

- *Type:* str

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `day_of_the_week`<sup>Required</sup> <a name="day_of_the_week" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.property.dayOfTheWeek"></a>

```python
day_of_the_week: str
```

- *Type:* str

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: K8SNodePoolMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolMaintenanceWindow">K8SNodePoolMaintenanceWindow</a>

---


### K8SNodePoolTimeoutsOutputReference <a name="K8SNodePoolTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_node_pool

k8SNodePool.K8SNodePoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts">K8SNodePoolTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, K8SNodePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.k8SNodePool.K8SNodePoolTimeouts">K8SNodePoolTimeouts</a>]

---



