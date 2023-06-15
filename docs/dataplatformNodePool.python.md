# `ionoscloud_dataplatform_node_pool`

Refer to the Terraform Registory for docs: [`ionoscloud_dataplatform_node_pool`](https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool).

# `dataplatformNodePool` Submodule <a name="`dataplatformNodePool` Submodule" id="@cdktf/provider-ionoscloud.dataplatformNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplatformNodePool <a name="DataplatformNodePool" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool ionoscloud_dataplatform_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import dataplatform_node_pool

dataplatformNodePool.DataplatformNodePool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  name: str,
  node_count: typing.Union[int, float],
  annotations: typing.Mapping[str] = None,
  availability_zone: str = None,
  cores_count: typing.Union[int, float] = None,
  cpu_family: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  maintenance_window: typing.Union[IResolvable, typing.List[DataplatformNodePoolMaintenanceWindow]] = None,
  ram_size: typing.Union[int, float] = None,
  storage_size: typing.Union[int, float] = None,
  storage_type: str = None,
  timeouts: DataplatformNodePoolTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | The UUID of an existing Dataplatform cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of your cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | The number of nodes that make up the node pool. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Key-value pairs attached to node pool resource as [Kubernetes annotations](https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/). |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | The availability zone of the virtual datacenter region where the node pool resources should be provisioned. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.coresCount">cores_count</a></code> | <code>typing.Union[int, float]</code> | The number of CPU cores per node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.cpuFamily">cpu_family</a></code> | <code>str</code> | A valid CPU family name or `AUTO` if the platform shall choose the best fitting option. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#id DataplatformNodePool#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Key-value pairs attached to the node pool resource as [Kubernetes labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/). |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.maintenanceWindow">maintenance_window</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow">DataplatformNodePoolMaintenanceWindow</a>]]</code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.ramSize">ram_size</a></code> | <code>typing.Union[int, float]</code> | The RAM size for one node in MB. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.storageSize">storage_size</a></code> | <code>typing.Union[int, float]</code> | The size of the volume in GB. The size must be greater than 10GB. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.storageType">storage_type</a></code> | <code>str</code> | The type of hardware for the volume. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts">DataplatformNodePoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.clusterId"></a>

- *Type:* str

The UUID of an existing Dataplatform cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#cluster_id DataplatformNodePool#cluster_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.name"></a>

- *Type:* str

The name of your cluster.

Must be 63 characters or less and must be empty or begin and end with an alphanumeric character ([a-z0-9A-Z]). It can contain dashes (-), underscores (_), dots (.), and alphanumerics in-between.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#name DataplatformNodePool#name}

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

The number of nodes that make up the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#node_count DataplatformNodePool#node_count}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Key-value pairs attached to node pool resource as [Kubernetes annotations](https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#annotations DataplatformNodePool#annotations}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.availabilityZone"></a>

- *Type:* str

The availability zone of the virtual datacenter region where the node pool resources should be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#availability_zone DataplatformNodePool#availability_zone}

---

##### `cores_count`<sup>Optional</sup> <a name="cores_count" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.coresCount"></a>

- *Type:* typing.Union[int, float]

The number of CPU cores per node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#cores_count DataplatformNodePool#cores_count}

---

##### `cpu_family`<sup>Optional</sup> <a name="cpu_family" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.cpuFamily"></a>

- *Type:* str

A valid CPU family name or `AUTO` if the platform shall choose the best fitting option.

Available CPU architectures can be retrieved from the datacenter resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#cpu_family DataplatformNodePool#cpu_family}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#id DataplatformNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Key-value pairs attached to the node pool resource as [Kubernetes labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#labels DataplatformNodePool#labels}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.maintenanceWindow"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow">DataplatformNodePoolMaintenanceWindow</a>]]

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#maintenance_window DataplatformNodePool#maintenance_window}

---

##### `ram_size`<sup>Optional</sup> <a name="ram_size" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.ramSize"></a>

- *Type:* typing.Union[int, float]

The RAM size for one node in MB.

Must be set in multiples of 1024 MB, with a minimum size is of 2048 MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#ram_size DataplatformNodePool#ram_size}

---

##### `storage_size`<sup>Optional</sup> <a name="storage_size" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.storageSize"></a>

- *Type:* typing.Union[int, float]

The size of the volume in GB. The size must be greater than 10GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#storage_size DataplatformNodePool#storage_size}

---

##### `storage_type`<sup>Optional</sup> <a name="storage_type" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.storageType"></a>

- *Type:* str

The type of hardware for the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#storage_type DataplatformNodePool#storage_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts">DataplatformNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#timeouts DataplatformNodePool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.putMaintenanceWindow">put_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetCoresCount">reset_cores_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetCpuFamily">reset_cpu_family</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetRamSize">reset_ram_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetStorageSize">reset_storage_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetStorageType">reset_storage_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_maintenance_window` <a name="put_maintenance_window" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.putMaintenanceWindow"></a>

```python
def put_maintenance_window(
  value: typing.Union[IResolvable, typing.List[DataplatformNodePoolMaintenanceWindow]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.putMaintenanceWindow.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow">DataplatformNodePoolMaintenanceWindow</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#create DataplatformNodePool#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#default DataplatformNodePool#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#delete DataplatformNodePool#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#update DataplatformNodePool#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_cores_count` <a name="reset_cores_count" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetCoresCount"></a>

```python
def reset_cores_count() -> None
```

##### `reset_cpu_family` <a name="reset_cpu_family" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetCpuFamily"></a>

```python
def reset_cpu_family() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_ram_size` <a name="reset_ram_size" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetRamSize"></a>

```python
def reset_ram_size() -> None
```

##### `reset_storage_size` <a name="reset_storage_size" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetStorageSize"></a>

```python
def reset_storage_size() -> None
```

##### `reset_storage_type` <a name="reset_storage_type" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetStorageType"></a>

```python
def reset_storage_type() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import dataplatform_node_pool

dataplatformNodePool.DataplatformNodePool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import dataplatform_node_pool

dataplatformNodePool.DataplatformNodePool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import dataplatform_node_pool

dataplatformNodePool.DataplatformNodePool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.datacenterId">datacenter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList">DataplatformNodePoolMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference">DataplatformNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.coresCountInput">cores_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.cpuFamilyInput">cpu_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow">DataplatformNodePoolMaintenanceWindow</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.ramSizeInput">ram_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.storageSizeInput">storage_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.storageTypeInput">storage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts">DataplatformNodePoolTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.coresCount">cores_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.cpuFamily">cpu_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.ramSize">ram_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.storageSize">storage_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.maintenanceWindow"></a>

```python
maintenance_window: DataplatformNodePoolMaintenanceWindowList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList">DataplatformNodePoolMaintenanceWindowList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.timeouts"></a>

```python
timeouts: DataplatformNodePoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference">DataplatformNodePoolTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `cores_count_input`<sup>Optional</sup> <a name="cores_count_input" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.coresCountInput"></a>

```python
cores_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_family_input`<sup>Optional</sup> <a name="cpu_family_input" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.cpuFamilyInput"></a>

```python
cpu_family_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: typing.Union[IResolvable, typing.List[DataplatformNodePoolMaintenanceWindow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow">DataplatformNodePoolMaintenanceWindow</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ram_size_input`<sup>Optional</sup> <a name="ram_size_input" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.ramSizeInput"></a>

```python
ram_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_size_input`<sup>Optional</sup> <a name="storage_size_input" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.storageSizeInput"></a>

```python
storage_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_type_input`<sup>Optional</sup> <a name="storage_type_input" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.storageTypeInput"></a>

```python
storage_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataplatformNodePoolTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts">DataplatformNodePoolTimeouts</a>, cdktf.IResolvable]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `cores_count`<sup>Required</sup> <a name="cores_count" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.coresCount"></a>

```python
cores_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_family`<sup>Required</sup> <a name="cpu_family" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.cpuFamily"></a>

```python
cpu_family: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ram_size`<sup>Required</sup> <a name="ram_size" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.ramSize"></a>

```python
ram_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_size`<sup>Required</sup> <a name="storage_size" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.storageSize"></a>

```python
storage_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataplatformNodePoolConfig <a name="DataplatformNodePoolConfig" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import dataplatform_node_pool

dataplatformNodePool.DataplatformNodePoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  name: str,
  node_count: typing.Union[int, float],
  annotations: typing.Mapping[str] = None,
  availability_zone: str = None,
  cores_count: typing.Union[int, float] = None,
  cpu_family: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  maintenance_window: typing.Union[IResolvable, typing.List[DataplatformNodePoolMaintenanceWindow]] = None,
  ram_size: typing.Union[int, float] = None,
  storage_size: typing.Union[int, float] = None,
  storage_type: str = None,
  timeouts: DataplatformNodePoolTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | The UUID of an existing Dataplatform cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.name">name</a></code> | <code>str</code> | The name of your cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | The number of nodes that make up the node pool. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Key-value pairs attached to node pool resource as [Kubernetes annotations](https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/). |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | The availability zone of the virtual datacenter region where the node pool resources should be provisioned. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.coresCount">cores_count</a></code> | <code>typing.Union[int, float]</code> | The number of CPU cores per node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.cpuFamily">cpu_family</a></code> | <code>str</code> | A valid CPU family name or `AUTO` if the platform shall choose the best fitting option. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#id DataplatformNodePool#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Key-value pairs attached to the node pool resource as [Kubernetes labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/). |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.maintenanceWindow">maintenance_window</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow">DataplatformNodePoolMaintenanceWindow</a>]]</code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.ramSize">ram_size</a></code> | <code>typing.Union[int, float]</code> | The RAM size for one node in MB. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.storageSize">storage_size</a></code> | <code>typing.Union[int, float]</code> | The size of the volume in GB. The size must be greater than 10GB. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.storageType">storage_type</a></code> | <code>str</code> | The type of hardware for the volume. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts">DataplatformNodePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

The UUID of an existing Dataplatform cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#cluster_id DataplatformNodePool#cluster_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of your cluster.

Must be 63 characters or less and must be empty or begin and end with an alphanumeric character ([a-z0-9A-Z]). It can contain dashes (-), underscores (_), dots (.), and alphanumerics in-between.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#name DataplatformNodePool#name}

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of nodes that make up the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#node_count DataplatformNodePool#node_count}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Key-value pairs attached to node pool resource as [Kubernetes annotations](https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#annotations DataplatformNodePool#annotations}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

The availability zone of the virtual datacenter region where the node pool resources should be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#availability_zone DataplatformNodePool#availability_zone}

---

##### `cores_count`<sup>Optional</sup> <a name="cores_count" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.coresCount"></a>

```python
cores_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of CPU cores per node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#cores_count DataplatformNodePool#cores_count}

---

##### `cpu_family`<sup>Optional</sup> <a name="cpu_family" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.cpuFamily"></a>

```python
cpu_family: str
```

- *Type:* str

A valid CPU family name or `AUTO` if the platform shall choose the best fitting option.

Available CPU architectures can be retrieved from the datacenter resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#cpu_family DataplatformNodePool#cpu_family}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#id DataplatformNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Key-value pairs attached to the node pool resource as [Kubernetes labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#labels DataplatformNodePool#labels}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.maintenanceWindow"></a>

```python
maintenance_window: typing.Union[IResolvable, typing.List[DataplatformNodePoolMaintenanceWindow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow">DataplatformNodePoolMaintenanceWindow</a>]]

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#maintenance_window DataplatformNodePool#maintenance_window}

---

##### `ram_size`<sup>Optional</sup> <a name="ram_size" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.ramSize"></a>

```python
ram_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The RAM size for one node in MB.

Must be set in multiples of 1024 MB, with a minimum size is of 2048 MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#ram_size DataplatformNodePool#ram_size}

---

##### `storage_size`<sup>Optional</sup> <a name="storage_size" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.storageSize"></a>

```python
storage_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size of the volume in GB. The size must be greater than 10GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#storage_size DataplatformNodePool#storage_size}

---

##### `storage_type`<sup>Optional</sup> <a name="storage_type" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

The type of hardware for the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#storage_type DataplatformNodePool#storage_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.timeouts"></a>

```python
timeouts: DataplatformNodePoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts">DataplatformNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#timeouts DataplatformNodePool#timeouts}

---

### DataplatformNodePoolMaintenanceWindow <a name="DataplatformNodePoolMaintenanceWindow" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import dataplatform_node_pool

dataplatformNodePool.DataplatformNodePoolMaintenanceWindow(
  day_of_the_week: str,
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow.property.dayOfTheWeek">day_of_the_week</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#day_of_the_week DataplatformNodePool#day_of_the_week}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow.property.time">time</a></code> | <code>str</code> | Time at which the maintenance should start. |

---

##### `day_of_the_week`<sup>Required</sup> <a name="day_of_the_week" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow.property.dayOfTheWeek"></a>

```python
day_of_the_week: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#day_of_the_week DataplatformNodePool#day_of_the_week}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow.property.time"></a>

```python
time: str
```

- *Type:* str

Time at which the maintenance should start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#time DataplatformNodePool#time}

---

### DataplatformNodePoolTimeouts <a name="DataplatformNodePoolTimeouts" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import dataplatform_node_pool

dataplatformNodePool.DataplatformNodePoolTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#create DataplatformNodePool#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#default DataplatformNodePool#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#delete DataplatformNodePool#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#update DataplatformNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#create DataplatformNodePool#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#default DataplatformNodePool#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#delete DataplatformNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/dataplatform_node_pool#update DataplatformNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplatformNodePoolMaintenanceWindowList <a name="DataplatformNodePoolMaintenanceWindowList" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import dataplatform_node_pool

dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataplatformNodePoolMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow">DataplatformNodePoolMaintenanceWindow</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataplatformNodePoolMaintenanceWindow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow">DataplatformNodePoolMaintenanceWindow</a>]]

---


### DataplatformNodePoolMaintenanceWindowOutputReference <a name="DataplatformNodePoolMaintenanceWindowOutputReference" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import dataplatform_node_pool

dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.property.dayOfTheWeekInput">day_of_the_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.property.dayOfTheWeek">day_of_the_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow">DataplatformNodePoolMaintenanceWindow</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_the_week_input`<sup>Optional</sup> <a name="day_of_the_week_input" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.property.dayOfTheWeekInput"></a>

```python
day_of_the_week_input: str
```

- *Type:* str

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `day_of_the_week`<sup>Required</sup> <a name="day_of_the_week" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.property.dayOfTheWeek"></a>

```python
day_of_the_week: str
```

- *Type:* str

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataplatformNodePoolMaintenanceWindow, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow">DataplatformNodePoolMaintenanceWindow</a>, cdktf.IResolvable]

---


### DataplatformNodePoolTimeoutsOutputReference <a name="DataplatformNodePoolTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import dataplatform_node_pool

dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts">DataplatformNodePoolTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataplatformNodePoolTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts">DataplatformNodePoolTimeouts</a>, cdktf.IResolvable]

---



