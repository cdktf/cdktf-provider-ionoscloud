# `k8SCluster` Submodule <a name="`k8SCluster` Submodule" id="@cdktf/provider-ionoscloud.k8SCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### K8SCluster <a name="K8SCluster" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster ionoscloud_k8s_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_cluster

k8SCluster.K8SCluster(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  allow_replace: bool | IResolvable = None,
  api_subnet_allow_list: typing.List[str] = None,
  id: str = None,
  k8_s_version: str = None,
  location: str = None,
  maintenance_window: K8SClusterMaintenanceWindow = None,
  nat_gateway_ip: str = None,
  node_subnet: str = None,
  public: bool | IResolvable = None,
  s3_buckets: IResolvable | typing.List[K8SClusterS3Buckets] = None,
  timeouts: K8SClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | The desired name for the cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.allowReplace">allow_replace</a></code> | <code>bool \| cdktf.IResolvable</code> | When set to true, allows the update of immutable fields by destroying and re-creating the cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.apiSubnetAllowList">api_subnet_allow_list</a></code> | <code>typing.List[str]</code> | Access to the K8s API server is restricted to these CIDRs. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#id K8SCluster#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.k8SVersion">k8_s_version</a></code> | <code>str</code> | The desired Kubernetes Version. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | This attribute is mandatory if the cluster is private. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindow">K8SClusterMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.natGatewayIp">nat_gateway_ip</a></code> | <code>str</code> | The NAT gateway IP of the cluster if the cluster is private. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.nodeSubnet">node_subnet</a></code> | <code>str</code> | The node subnet of the cluster, if the cluster is private. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.public">public</a></code> | <code>bool \| cdktf.IResolvable</code> | The indicator if the cluster is public or private. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.s3Buckets">s3_buckets</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3Buckets">K8SClusterS3Buckets</a>]</code> | s3_buckets block. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts">K8SClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.name"></a>

- *Type:* str

The desired name for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#name K8SCluster#name}

---

##### `allow_replace`<sup>Optional</sup> <a name="allow_replace" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.allowReplace"></a>

- *Type:* bool | cdktf.IResolvable

When set to true, allows the update of immutable fields by destroying and re-creating the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#allow_replace K8SCluster#allow_replace}

---

##### `api_subnet_allow_list`<sup>Optional</sup> <a name="api_subnet_allow_list" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.apiSubnetAllowList"></a>

- *Type:* typing.List[str]

Access to the K8s API server is restricted to these CIDRs.

Cluster-internal traffic is not affected by this restriction. If no allowlist is specified, access is not restricted. If an IP without subnet mask is provided, the default value will be used: 32 for IPv4 and 128 for IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#api_subnet_allow_list K8SCluster#api_subnet_allow_list}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#id K8SCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `k8_s_version`<sup>Optional</sup> <a name="k8_s_version" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.k8SVersion"></a>

- *Type:* str

The desired Kubernetes Version.

For supported values, please check the API documentation. Downgrades are not supported. The provider will ignore downgrades of patch level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#k8s_version K8SCluster#k8s_version}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.location"></a>

- *Type:* str

This attribute is mandatory if the cluster is private.

The location must be enabled for your contract, or you must have a data center at that location. This attribute is immutable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#location K8SCluster#location}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindow">K8SClusterMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#maintenance_window K8SCluster#maintenance_window}

---

##### `nat_gateway_ip`<sup>Optional</sup> <a name="nat_gateway_ip" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.natGatewayIp"></a>

- *Type:* str

The NAT gateway IP of the cluster if the cluster is private.

This attribute is immutable. Must be a reserved IP in the same location as the cluster's location. This attribute is mandatory if the cluster is private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#nat_gateway_ip K8SCluster#nat_gateway_ip}

---

##### `node_subnet`<sup>Optional</sup> <a name="node_subnet" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.nodeSubnet"></a>

- *Type:* str

The node subnet of the cluster, if the cluster is private.

This attribute is optional and immutable. Must be a valid CIDR notation for an IPv4 network prefix of 16 bits length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#node_subnet K8SCluster#node_subnet}

---

##### `public`<sup>Optional</sup> <a name="public" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.public"></a>

- *Type:* bool | cdktf.IResolvable

The indicator if the cluster is public or private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#public K8SCluster#public}

---

##### `s3_buckets`<sup>Optional</sup> <a name="s3_buckets" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.s3Buckets"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3Buckets">K8SClusterS3Buckets</a>]

s3_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#s3_buckets K8SCluster#s3_buckets}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts">K8SClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#timeouts K8SCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.putMaintenanceWindow">put_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.putS3Buckets">put_s3_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetAllowReplace">reset_allow_replace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetApiSubnetAllowList">reset_api_subnet_allow_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetK8SVersion">reset_k8_s_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetNatGatewayIp">reset_nat_gateway_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetNodeSubnet">reset_node_subnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetPublic">reset_public</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetS3Buckets">reset_s3_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_maintenance_window` <a name="put_maintenance_window" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.putMaintenanceWindow"></a>

```python
def put_maintenance_window(
  day_of_the_week: str,
  time: str
) -> None
```

###### `day_of_the_week`<sup>Required</sup> <a name="day_of_the_week" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.putMaintenanceWindow.parameter.dayOfTheWeek"></a>

- *Type:* str

Day of the week when maintenance is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#day_of_the_week K8SCluster#day_of_the_week}

---

###### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.putMaintenanceWindow.parameter.time"></a>

- *Type:* str

A clock time in the day when maintenance is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#time K8SCluster#time}

---

##### `put_s3_buckets` <a name="put_s3_buckets" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.putS3Buckets"></a>

```python
def put_s3_buckets(
  value: IResolvable | typing.List[K8SClusterS3Buckets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.putS3Buckets.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3Buckets">K8SClusterS3Buckets</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#create K8SCluster#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#default K8SCluster#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#delete K8SCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#update K8SCluster#update}.

---

##### `reset_allow_replace` <a name="reset_allow_replace" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetAllowReplace"></a>

```python
def reset_allow_replace() -> None
```

##### `reset_api_subnet_allow_list` <a name="reset_api_subnet_allow_list" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetApiSubnetAllowList"></a>

```python
def reset_api_subnet_allow_list() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_k8_s_version` <a name="reset_k8_s_version" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetK8SVersion"></a>

```python
def reset_k8_s_version() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_nat_gateway_ip` <a name="reset_nat_gateway_ip" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetNatGatewayIp"></a>

```python
def reset_nat_gateway_ip() -> None
```

##### `reset_node_subnet` <a name="reset_node_subnet" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetNodeSubnet"></a>

```python
def reset_node_subnet() -> None
```

##### `reset_public` <a name="reset_public" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetPublic"></a>

```python
def reset_public() -> None
```

##### `reset_s3_buckets` <a name="reset_s3_buckets" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetS3Buckets"></a>

```python
def reset_s3_buckets() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a K8SCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_cluster

k8SCluster.K8SCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_cluster

k8SCluster.K8SCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_cluster

k8SCluster.K8SCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_cluster

k8SCluster.K8SCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a K8SCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the K8SCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing K8SCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the K8SCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference">K8SClusterMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.s3Buckets">s3_buckets</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList">K8SClusterS3BucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference">K8SClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.viableNodePoolVersions">viable_node_pool_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.allowReplaceInput">allow_replace_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.apiSubnetAllowListInput">api_subnet_allow_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.k8SVersionInput">k8_s_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindow">K8SClusterMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.natGatewayIpInput">nat_gateway_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.nodeSubnetInput">node_subnet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.publicInput">public_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.s3BucketsInput">s3_buckets_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3Buckets">K8SClusterS3Buckets</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts">K8SClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.allowReplace">allow_replace</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.apiSubnetAllowList">api_subnet_allow_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.k8SVersion">k8_s_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.natGatewayIp">nat_gateway_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.nodeSubnet">node_subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.public">public</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.maintenanceWindow"></a>

```python
maintenance_window: K8SClusterMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference">K8SClusterMaintenanceWindowOutputReference</a>

---

##### `s3_buckets`<sup>Required</sup> <a name="s3_buckets" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.s3Buckets"></a>

```python
s3_buckets: K8SClusterS3BucketsList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList">K8SClusterS3BucketsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.timeouts"></a>

```python
timeouts: K8SClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference">K8SClusterTimeoutsOutputReference</a>

---

##### `viable_node_pool_versions`<sup>Required</sup> <a name="viable_node_pool_versions" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.viableNodePoolVersions"></a>

```python
viable_node_pool_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_replace_input`<sup>Optional</sup> <a name="allow_replace_input" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.allowReplaceInput"></a>

```python
allow_replace_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `api_subnet_allow_list_input`<sup>Optional</sup> <a name="api_subnet_allow_list_input" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.apiSubnetAllowListInput"></a>

```python
api_subnet_allow_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `k8_s_version_input`<sup>Optional</sup> <a name="k8_s_version_input" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.k8SVersionInput"></a>

```python
k8_s_version_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: K8SClusterMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindow">K8SClusterMaintenanceWindow</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nat_gateway_ip_input`<sup>Optional</sup> <a name="nat_gateway_ip_input" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.natGatewayIpInput"></a>

```python
nat_gateway_ip_input: str
```

- *Type:* str

---

##### `node_subnet_input`<sup>Optional</sup> <a name="node_subnet_input" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.nodeSubnetInput"></a>

```python
node_subnet_input: str
```

- *Type:* str

---

##### `public_input`<sup>Optional</sup> <a name="public_input" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.publicInput"></a>

```python
public_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `s3_buckets_input`<sup>Optional</sup> <a name="s3_buckets_input" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.s3BucketsInput"></a>

```python
s3_buckets_input: IResolvable | typing.List[K8SClusterS3Buckets]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3Buckets">K8SClusterS3Buckets</a>]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | K8SClusterTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts">K8SClusterTimeouts</a>

---

##### `allow_replace`<sup>Required</sup> <a name="allow_replace" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.allowReplace"></a>

```python
allow_replace: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `api_subnet_allow_list`<sup>Required</sup> <a name="api_subnet_allow_list" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.apiSubnetAllowList"></a>

```python
api_subnet_allow_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `k8_s_version`<sup>Required</sup> <a name="k8_s_version" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.k8SVersion"></a>

```python
k8_s_version: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nat_gateway_ip`<sup>Required</sup> <a name="nat_gateway_ip" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.natGatewayIp"></a>

```python
nat_gateway_ip: str
```

- *Type:* str

---

##### `node_subnet`<sup>Required</sup> <a name="node_subnet" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.nodeSubnet"></a>

```python
node_subnet: str
```

- *Type:* str

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.public"></a>

```python
public: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### K8SClusterConfig <a name="K8SClusterConfig" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_cluster

k8SCluster.K8SClusterConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  allow_replace: bool | IResolvable = None,
  api_subnet_allow_list: typing.List[str] = None,
  id: str = None,
  k8_s_version: str = None,
  location: str = None,
  maintenance_window: K8SClusterMaintenanceWindow = None,
  nat_gateway_ip: str = None,
  node_subnet: str = None,
  public: bool | IResolvable = None,
  s3_buckets: IResolvable | typing.List[K8SClusterS3Buckets] = None,
  timeouts: K8SClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.name">name</a></code> | <code>str</code> | The desired name for the cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.allowReplace">allow_replace</a></code> | <code>bool \| cdktf.IResolvable</code> | When set to true, allows the update of immutable fields by destroying and re-creating the cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.apiSubnetAllowList">api_subnet_allow_list</a></code> | <code>typing.List[str]</code> | Access to the K8s API server is restricted to these CIDRs. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#id K8SCluster#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.k8SVersion">k8_s_version</a></code> | <code>str</code> | The desired Kubernetes Version. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.location">location</a></code> | <code>str</code> | This attribute is mandatory if the cluster is private. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindow">K8SClusterMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.natGatewayIp">nat_gateway_ip</a></code> | <code>str</code> | The NAT gateway IP of the cluster if the cluster is private. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.nodeSubnet">node_subnet</a></code> | <code>str</code> | The node subnet of the cluster, if the cluster is private. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.public">public</a></code> | <code>bool \| cdktf.IResolvable</code> | The indicator if the cluster is public or private. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.s3Buckets">s3_buckets</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3Buckets">K8SClusterS3Buckets</a>]</code> | s3_buckets block. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts">K8SClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The desired name for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#name K8SCluster#name}

---

##### `allow_replace`<sup>Optional</sup> <a name="allow_replace" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.allowReplace"></a>

```python
allow_replace: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

When set to true, allows the update of immutable fields by destroying and re-creating the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#allow_replace K8SCluster#allow_replace}

---

##### `api_subnet_allow_list`<sup>Optional</sup> <a name="api_subnet_allow_list" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.apiSubnetAllowList"></a>

```python
api_subnet_allow_list: typing.List[str]
```

- *Type:* typing.List[str]

Access to the K8s API server is restricted to these CIDRs.

Cluster-internal traffic is not affected by this restriction. If no allowlist is specified, access is not restricted. If an IP without subnet mask is provided, the default value will be used: 32 for IPv4 and 128 for IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#api_subnet_allow_list K8SCluster#api_subnet_allow_list}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#id K8SCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `k8_s_version`<sup>Optional</sup> <a name="k8_s_version" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.k8SVersion"></a>

```python
k8_s_version: str
```

- *Type:* str

The desired Kubernetes Version.

For supported values, please check the API documentation. Downgrades are not supported. The provider will ignore downgrades of patch level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#k8s_version K8SCluster#k8s_version}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

This attribute is mandatory if the cluster is private.

The location must be enabled for your contract, or you must have a data center at that location. This attribute is immutable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#location K8SCluster#location}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.maintenanceWindow"></a>

```python
maintenance_window: K8SClusterMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindow">K8SClusterMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#maintenance_window K8SCluster#maintenance_window}

---

##### `nat_gateway_ip`<sup>Optional</sup> <a name="nat_gateway_ip" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.natGatewayIp"></a>

```python
nat_gateway_ip: str
```

- *Type:* str

The NAT gateway IP of the cluster if the cluster is private.

This attribute is immutable. Must be a reserved IP in the same location as the cluster's location. This attribute is mandatory if the cluster is private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#nat_gateway_ip K8SCluster#nat_gateway_ip}

---

##### `node_subnet`<sup>Optional</sup> <a name="node_subnet" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.nodeSubnet"></a>

```python
node_subnet: str
```

- *Type:* str

The node subnet of the cluster, if the cluster is private.

This attribute is optional and immutable. Must be a valid CIDR notation for an IPv4 network prefix of 16 bits length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#node_subnet K8SCluster#node_subnet}

---

##### `public`<sup>Optional</sup> <a name="public" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.public"></a>

```python
public: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

The indicator if the cluster is public or private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#public K8SCluster#public}

---

##### `s3_buckets`<sup>Optional</sup> <a name="s3_buckets" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.s3Buckets"></a>

```python
s3_buckets: IResolvable | typing.List[K8SClusterS3Buckets]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3Buckets">K8SClusterS3Buckets</a>]

s3_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#s3_buckets K8SCluster#s3_buckets}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.timeouts"></a>

```python
timeouts: K8SClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts">K8SClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#timeouts K8SCluster#timeouts}

---

### K8SClusterMaintenanceWindow <a name="K8SClusterMaintenanceWindow" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_cluster

k8SCluster.K8SClusterMaintenanceWindow(
  day_of_the_week: str,
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindow.property.dayOfTheWeek">day_of_the_week</a></code> | <code>str</code> | Day of the week when maintenance is allowed. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindow.property.time">time</a></code> | <code>str</code> | A clock time in the day when maintenance is allowed. |

---

##### `day_of_the_week`<sup>Required</sup> <a name="day_of_the_week" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindow.property.dayOfTheWeek"></a>

```python
day_of_the_week: str
```

- *Type:* str

Day of the week when maintenance is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#day_of_the_week K8SCluster#day_of_the_week}

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindow.property.time"></a>

```python
time: str
```

- *Type:* str

A clock time in the day when maintenance is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#time K8SCluster#time}

---

### K8SClusterS3Buckets <a name="K8SClusterS3Buckets" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3Buckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3Buckets.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_cluster

k8SCluster.K8SClusterS3Buckets(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3Buckets.property.name">name</a></code> | <code>str</code> | Name of the Object Storage bucket. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3Buckets.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the Object Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#name K8SCluster#name}

---

### K8SClusterTimeouts <a name="K8SClusterTimeouts" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_cluster

k8SCluster.K8SClusterTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#create K8SCluster#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#default K8SCluster#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#delete K8SCluster#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#update K8SCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#create K8SCluster#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#default K8SCluster#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#delete K8SCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/k8s_cluster#update K8SCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### K8SClusterMaintenanceWindowOutputReference <a name="K8SClusterMaintenanceWindowOutputReference" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_cluster

k8SCluster.K8SClusterMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.property.dayOfTheWeekInput">day_of_the_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.property.dayOfTheWeek">day_of_the_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindow">K8SClusterMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_the_week_input`<sup>Optional</sup> <a name="day_of_the_week_input" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.property.dayOfTheWeekInput"></a>

```python
day_of_the_week_input: str
```

- *Type:* str

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `day_of_the_week`<sup>Required</sup> <a name="day_of_the_week" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.property.dayOfTheWeek"></a>

```python
day_of_the_week: str
```

- *Type:* str

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: K8SClusterMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindow">K8SClusterMaintenanceWindow</a>

---


### K8SClusterS3BucketsList <a name="K8SClusterS3BucketsList" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_cluster

k8SCluster.K8SClusterS3BucketsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> K8SClusterS3BucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3Buckets">K8SClusterS3Buckets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[K8SClusterS3Buckets]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3Buckets">K8SClusterS3Buckets</a>]

---


### K8SClusterS3BucketsOutputReference <a name="K8SClusterS3BucketsOutputReference" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_cluster

k8SCluster.K8SClusterS3BucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3Buckets">K8SClusterS3Buckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | K8SClusterS3Buckets
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3Buckets">K8SClusterS3Buckets</a>

---


### K8SClusterTimeoutsOutputReference <a name="K8SClusterTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import k8_s_cluster

k8SCluster.K8SClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts">K8SClusterTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | K8SClusterTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts">K8SClusterTimeouts</a>

---



