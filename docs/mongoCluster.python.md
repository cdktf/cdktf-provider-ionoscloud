# `mongoCluster` Submodule <a name="`mongoCluster` Submodule" id="@cdktf/provider-ionoscloud.mongoCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MongoCluster <a name="MongoCluster" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster ionoscloud_mongo_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import mongo_cluster

mongoCluster.MongoCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connections: MongoClusterConnections,
  display_name: str,
  instances: typing.Union[int, float],
  location: str,
  mongodb_version: str,
  backup: MongoClusterBackup = None,
  bi_connector: MongoClusterBiConnector = None,
  cores: typing.Union[int, float] = None,
  edition: str = None,
  id: str = None,
  maintenance_window: MongoClusterMaintenanceWindow = None,
  ram: typing.Union[int, float] = None,
  shards: typing.Union[int, float] = None,
  storage_size: typing.Union[int, float] = None,
  storage_type: str = None,
  template_id: str = None,
  timeouts: MongoClusterTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.connections">connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections">MongoClusterConnections</a></code> | connections block. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The name of your cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.instances">instances</a></code> | <code>typing.Union[int, float]</code> | The total number of instances in the cluster (one master and n-1 standbys). |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | The physical location where the cluster will be created. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.mongodbVersion">mongodb_version</a></code> | <code>str</code> | The MongoDB version of your cluster. Update forces cluster re-creation. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.backup">backup</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup">MongoClusterBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.biConnector">bi_connector</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnector">MongoClusterBiConnector</a></code> | bi_connector block. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.cores">cores</a></code> | <code>typing.Union[int, float]</code> | The number of CPU cores per instance. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.edition">edition</a></code> | <code>str</code> | The cluster edition. Must be one of: playground, business, enterprise. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#id MongoCluster#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindow">MongoClusterMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.ram">ram</a></code> | <code>typing.Union[int, float]</code> | The amount of memory per instance in megabytes. Multiple of 1024. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.shards">shards</a></code> | <code>typing.Union[int, float]</code> | The total number of shards in the cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.storageSize">storage_size</a></code> | <code>typing.Union[int, float]</code> | The amount of storage per instance in megabytes. At least 5120, at most 2097152. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.storageType">storage_type</a></code> | <code>str</code> | The storage type. One of : HDD, SSD, SSD Standard, SSD Premium. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.templateId">template_id</a></code> | <code>str</code> | The unique ID of the template, which specifies the number of cores, storage size, and memory. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.type">type</a></code> | <code>str</code> | The cluster type, either `replicaset` or `sharded-cluster`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.connections"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections">MongoClusterConnections</a>

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#connections MongoCluster#connections}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.displayName"></a>

- *Type:* str

The name of your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#display_name MongoCluster#display_name}

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.instances"></a>

- *Type:* typing.Union[int, float]

The total number of instances in the cluster (one master and n-1 standbys).

Example: 1, 3, 5, 7. For enterprise edition at least 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#instances MongoCluster#instances}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.location"></a>

- *Type:* str

The physical location where the cluster will be created.

This will be where all of your instances live. Property cannot be modified after datacenter creation (disallowed in update requests). Available locations: de/txl, gb/lhr, es/vit. Update forces cluster re-creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#location MongoCluster#location}

---

##### `mongodb_version`<sup>Required</sup> <a name="mongodb_version" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.mongodbVersion"></a>

- *Type:* str

The MongoDB version of your cluster. Update forces cluster re-creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#mongodb_version MongoCluster#mongodb_version}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.backup"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup">MongoClusterBackup</a>

backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#backup MongoCluster#backup}

---

##### `bi_connector`<sup>Optional</sup> <a name="bi_connector" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.biConnector"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnector">MongoClusterBiConnector</a>

bi_connector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#bi_connector MongoCluster#bi_connector}

---

##### `cores`<sup>Optional</sup> <a name="cores" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.cores"></a>

- *Type:* typing.Union[int, float]

The number of CPU cores per instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#cores MongoCluster#cores}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.edition"></a>

- *Type:* str

The cluster edition. Must be one of: playground, business, enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#edition MongoCluster#edition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#id MongoCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindow">MongoClusterMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#maintenance_window MongoCluster#maintenance_window}

---

##### `ram`<sup>Optional</sup> <a name="ram" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.ram"></a>

- *Type:* typing.Union[int, float]

The amount of memory per instance in megabytes. Multiple of 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#ram MongoCluster#ram}

---

##### `shards`<sup>Optional</sup> <a name="shards" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.shards"></a>

- *Type:* typing.Union[int, float]

The total number of shards in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#shards MongoCluster#shards}

---

##### `storage_size`<sup>Optional</sup> <a name="storage_size" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.storageSize"></a>

- *Type:* typing.Union[int, float]

The amount of storage per instance in megabytes. At least 5120, at most 2097152.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#storage_size MongoCluster#storage_size}

---

##### `storage_type`<sup>Optional</sup> <a name="storage_type" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.storageType"></a>

- *Type:* str

The storage type. One of : HDD, SSD, SSD Standard, SSD Premium.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#storage_type MongoCluster#storage_type}

---

##### `template_id`<sup>Optional</sup> <a name="template_id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.templateId"></a>

- *Type:* str

The unique ID of the template, which specifies the number of cores, storage size, and memory.

You cannot downgrade to a smaller template or minor edition (e.g. from business to playground). To get a list of all templates to confirm the changes use the /templates endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#template_id MongoCluster#template_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#timeouts MongoCluster#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.type"></a>

- *Type:* str

The cluster type, either `replicaset` or `sharded-cluster`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#type MongoCluster#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putBackup">put_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putBiConnector">put_bi_connector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putConnections">put_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putMaintenanceWindow">put_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetBackup">reset_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetBiConnector">reset_bi_connector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetCores">reset_cores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetEdition">reset_edition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetRam">reset_ram</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetShards">reset_shards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetStorageSize">reset_storage_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetStorageType">reset_storage_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetTemplateId">reset_template_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_backup` <a name="put_backup" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putBackup"></a>

```python
def put_backup(
  location: str = None,
  point_in_time_window_hours: typing.Union[int, float] = None,
  snapshot_interval_hours: typing.Union[int, float] = None
) -> None
```

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putBackup.parameter.location"></a>

- *Type:* str

The location where the cluster backups will be stored.

If not set, the backup is stored in the nearest location of the cluster. Examples: de, eu-sounth-2, eu-central-2

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#location MongoCluster#location}

---

###### `point_in_time_window_hours`<sup>Optional</sup> <a name="point_in_time_window_hours" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putBackup.parameter.pointInTimeWindowHours"></a>

- *Type:* typing.Union[int, float]

Number of hours in the past for which a point-in-time snapshot can be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#point_in_time_window_hours MongoCluster#point_in_time_window_hours}

---

###### `snapshot_interval_hours`<sup>Optional</sup> <a name="snapshot_interval_hours" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putBackup.parameter.snapshotIntervalHours"></a>

- *Type:* typing.Union[int, float]

Number of hours between snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#snapshot_interval_hours MongoCluster#snapshot_interval_hours}

---

##### `put_bi_connector` <a name="put_bi_connector" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putBiConnector"></a>

```python
def put_bi_connector(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putBiConnector.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable or disable the BiConnector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#enabled MongoCluster#enabled}

---

##### `put_connections` <a name="put_connections" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putConnections"></a>

```python
def put_connections(
  cidr_list: typing.List[str],
  datacenter_id: str,
  lan_id: str
) -> None
```

###### `cidr_list`<sup>Required</sup> <a name="cidr_list" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putConnections.parameter.cidrList"></a>

- *Type:* typing.List[str]

The list of IPs and subnet for your cluster.

Note the following unavailable IP ranges:10.233.64.0/18, 10.233.0.0/18, 10.233.114.0/24. example: [192.168.1.100/24, 192.168.1.101/24]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#cidr_list MongoCluster#cidr_list}

---

###### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putConnections.parameter.datacenterId"></a>

- *Type:* str

The datacenter to connect your cluster to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#datacenter_id MongoCluster#datacenter_id}

---

###### `lan_id`<sup>Required</sup> <a name="lan_id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putConnections.parameter.lanId"></a>

- *Type:* str

The LAN to connect your cluster to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#lan_id MongoCluster#lan_id}

---

##### `put_maintenance_window` <a name="put_maintenance_window" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putMaintenanceWindow"></a>

```python
def put_maintenance_window(
  day_of_the_week: str,
  time: str
) -> None
```

###### `day_of_the_week`<sup>Required</sup> <a name="day_of_the_week" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putMaintenanceWindow.parameter.dayOfTheWeek"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#day_of_the_week MongoCluster#day_of_the_week}.

---

###### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putMaintenanceWindow.parameter.time"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#time MongoCluster#time}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#create MongoCluster#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#default MongoCluster#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#delete MongoCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#update MongoCluster#update}.

---

##### `reset_backup` <a name="reset_backup" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetBackup"></a>

```python
def reset_backup() -> None
```

##### `reset_bi_connector` <a name="reset_bi_connector" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetBiConnector"></a>

```python
def reset_bi_connector() -> None
```

##### `reset_cores` <a name="reset_cores" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetCores"></a>

```python
def reset_cores() -> None
```

##### `reset_edition` <a name="reset_edition" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetEdition"></a>

```python
def reset_edition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_ram` <a name="reset_ram" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetRam"></a>

```python
def reset_ram() -> None
```

##### `reset_shards` <a name="reset_shards" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetShards"></a>

```python
def reset_shards() -> None
```

##### `reset_storage_size` <a name="reset_storage_size" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetStorageSize"></a>

```python
def reset_storage_size() -> None
```

##### `reset_storage_type` <a name="reset_storage_type" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetStorageType"></a>

```python
def reset_storage_type() -> None
```

##### `reset_template_id` <a name="reset_template_id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetTemplateId"></a>

```python
def reset_template_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MongoCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import mongo_cluster

mongoCluster.MongoCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import mongo_cluster

mongoCluster.MongoCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import mongo_cluster

mongoCluster.MongoCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import mongo_cluster

mongoCluster.MongoCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MongoCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MongoCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MongoCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MongoCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference">MongoClusterBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.biConnector">bi_connector</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference">MongoClusterBiConnectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference">MongoClusterConnectionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference">MongoClusterMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference">MongoClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.backupInput">backup_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup">MongoClusterBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.biConnectorInput">bi_connector_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnector">MongoClusterBiConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.connectionsInput">connections_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections">MongoClusterConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.coresInput">cores_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.editionInput">edition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.instancesInput">instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindow">MongoClusterMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.mongodbVersionInput">mongodb_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.ramInput">ram_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.shardsInput">shards_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.storageSizeInput">storage_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.storageTypeInput">storage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.templateIdInput">template_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.cores">cores</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.edition">edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.instances">instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.mongodbVersion">mongodb_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.ram">ram</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.shards">shards</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.storageSize">storage_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.templateId">template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.backup"></a>

```python
backup: MongoClusterBackupOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference">MongoClusterBackupOutputReference</a>

---

##### `bi_connector`<sup>Required</sup> <a name="bi_connector" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.biConnector"></a>

```python
bi_connector: MongoClusterBiConnectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference">MongoClusterBiConnectorOutputReference</a>

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.connections"></a>

```python
connections: MongoClusterConnectionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference">MongoClusterConnectionsOutputReference</a>

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.maintenanceWindow"></a>

```python
maintenance_window: MongoClusterMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference">MongoClusterMaintenanceWindowOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.timeouts"></a>

```python
timeouts: MongoClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference">MongoClusterTimeoutsOutputReference</a>

---

##### `backup_input`<sup>Optional</sup> <a name="backup_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.backupInput"></a>

```python
backup_input: MongoClusterBackup
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup">MongoClusterBackup</a>

---

##### `bi_connector_input`<sup>Optional</sup> <a name="bi_connector_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.biConnectorInput"></a>

```python
bi_connector_input: MongoClusterBiConnector
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnector">MongoClusterBiConnector</a>

---

##### `connections_input`<sup>Optional</sup> <a name="connections_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.connectionsInput"></a>

```python
connections_input: MongoClusterConnections
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections">MongoClusterConnections</a>

---

##### `cores_input`<sup>Optional</sup> <a name="cores_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.coresInput"></a>

```python
cores_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `edition_input`<sup>Optional</sup> <a name="edition_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.editionInput"></a>

```python
edition_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instances_input`<sup>Optional</sup> <a name="instances_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.instancesInput"></a>

```python
instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: MongoClusterMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindow">MongoClusterMaintenanceWindow</a>

---

##### `mongodb_version_input`<sup>Optional</sup> <a name="mongodb_version_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.mongodbVersionInput"></a>

```python
mongodb_version_input: str
```

- *Type:* str

---

##### `ram_input`<sup>Optional</sup> <a name="ram_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.ramInput"></a>

```python
ram_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shards_input`<sup>Optional</sup> <a name="shards_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.shardsInput"></a>

```python
shards_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_size_input`<sup>Optional</sup> <a name="storage_size_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.storageSizeInput"></a>

```python
storage_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_type_input`<sup>Optional</sup> <a name="storage_type_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.storageTypeInput"></a>

```python
storage_type_input: str
```

- *Type:* str

---

##### `template_id_input`<sup>Optional</sup> <a name="template_id_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.templateIdInput"></a>

```python
template_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MongoClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.cores"></a>

```python
cores: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.edition"></a>

```python
edition: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.instances"></a>

```python
instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `mongodb_version`<sup>Required</sup> <a name="mongodb_version" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.mongodbVersion"></a>

```python
mongodb_version: str
```

- *Type:* str

---

##### `ram`<sup>Required</sup> <a name="ram" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.ram"></a>

```python
ram: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shards`<sup>Required</sup> <a name="shards" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.shards"></a>

```python
shards: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_size`<sup>Required</sup> <a name="storage_size" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.storageSize"></a>

```python
storage_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `template_id`<sup>Required</sup> <a name="template_id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.templateId"></a>

```python
template_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MongoClusterBackup <a name="MongoClusterBackup" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import mongo_cluster

mongoCluster.MongoClusterBackup(
  location: str = None,
  point_in_time_window_hours: typing.Union[int, float] = None,
  snapshot_interval_hours: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup.property.location">location</a></code> | <code>str</code> | The location where the cluster backups will be stored. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup.property.pointInTimeWindowHours">point_in_time_window_hours</a></code> | <code>typing.Union[int, float]</code> | Number of hours in the past for which a point-in-time snapshot can be created. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup.property.snapshotIntervalHours">snapshot_interval_hours</a></code> | <code>typing.Union[int, float]</code> | Number of hours between snapshots. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup.property.location"></a>

```python
location: str
```

- *Type:* str

The location where the cluster backups will be stored.

If not set, the backup is stored in the nearest location of the cluster. Examples: de, eu-sounth-2, eu-central-2

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#location MongoCluster#location}

---

##### `point_in_time_window_hours`<sup>Optional</sup> <a name="point_in_time_window_hours" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup.property.pointInTimeWindowHours"></a>

```python
point_in_time_window_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of hours in the past for which a point-in-time snapshot can be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#point_in_time_window_hours MongoCluster#point_in_time_window_hours}

---

##### `snapshot_interval_hours`<sup>Optional</sup> <a name="snapshot_interval_hours" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup.property.snapshotIntervalHours"></a>

```python
snapshot_interval_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of hours between snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#snapshot_interval_hours MongoCluster#snapshot_interval_hours}

---

### MongoClusterBiConnector <a name="MongoClusterBiConnector" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnector.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import mongo_cluster

mongoCluster.MongoClusterBiConnector(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnector.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable or disable the BiConnector. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnector.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable or disable the BiConnector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#enabled MongoCluster#enabled}

---

### MongoClusterConfig <a name="MongoClusterConfig" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import mongo_cluster

mongoCluster.MongoClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connections: MongoClusterConnections,
  display_name: str,
  instances: typing.Union[int, float],
  location: str,
  mongodb_version: str,
  backup: MongoClusterBackup = None,
  bi_connector: MongoClusterBiConnector = None,
  cores: typing.Union[int, float] = None,
  edition: str = None,
  id: str = None,
  maintenance_window: MongoClusterMaintenanceWindow = None,
  ram: typing.Union[int, float] = None,
  shards: typing.Union[int, float] = None,
  storage_size: typing.Union[int, float] = None,
  storage_type: str = None,
  template_id: str = None,
  timeouts: MongoClusterTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections">MongoClusterConnections</a></code> | connections block. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.displayName">display_name</a></code> | <code>str</code> | The name of your cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.instances">instances</a></code> | <code>typing.Union[int, float]</code> | The total number of instances in the cluster (one master and n-1 standbys). |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.location">location</a></code> | <code>str</code> | The physical location where the cluster will be created. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.mongodbVersion">mongodb_version</a></code> | <code>str</code> | The MongoDB version of your cluster. Update forces cluster re-creation. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup">MongoClusterBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.biConnector">bi_connector</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnector">MongoClusterBiConnector</a></code> | bi_connector block. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.cores">cores</a></code> | <code>typing.Union[int, float]</code> | The number of CPU cores per instance. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.edition">edition</a></code> | <code>str</code> | The cluster edition. Must be one of: playground, business, enterprise. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#id MongoCluster#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindow">MongoClusterMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.ram">ram</a></code> | <code>typing.Union[int, float]</code> | The amount of memory per instance in megabytes. Multiple of 1024. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.shards">shards</a></code> | <code>typing.Union[int, float]</code> | The total number of shards in the cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.storageSize">storage_size</a></code> | <code>typing.Union[int, float]</code> | The amount of storage per instance in megabytes. At least 5120, at most 2097152. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.storageType">storage_type</a></code> | <code>str</code> | The storage type. One of : HDD, SSD, SSD Standard, SSD Premium. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.templateId">template_id</a></code> | <code>str</code> | The unique ID of the template, which specifies the number of cores, storage size, and memory. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.type">type</a></code> | <code>str</code> | The cluster type, either `replicaset` or `sharded-cluster`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.connections"></a>

```python
connections: MongoClusterConnections
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections">MongoClusterConnections</a>

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#connections MongoCluster#connections}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The name of your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#display_name MongoCluster#display_name}

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.instances"></a>

```python
instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The total number of instances in the cluster (one master and n-1 standbys).

Example: 1, 3, 5, 7. For enterprise edition at least 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#instances MongoCluster#instances}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The physical location where the cluster will be created.

This will be where all of your instances live. Property cannot be modified after datacenter creation (disallowed in update requests). Available locations: de/txl, gb/lhr, es/vit. Update forces cluster re-creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#location MongoCluster#location}

---

##### `mongodb_version`<sup>Required</sup> <a name="mongodb_version" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.mongodbVersion"></a>

```python
mongodb_version: str
```

- *Type:* str

The MongoDB version of your cluster. Update forces cluster re-creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#mongodb_version MongoCluster#mongodb_version}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.backup"></a>

```python
backup: MongoClusterBackup
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup">MongoClusterBackup</a>

backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#backup MongoCluster#backup}

---

##### `bi_connector`<sup>Optional</sup> <a name="bi_connector" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.biConnector"></a>

```python
bi_connector: MongoClusterBiConnector
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnector">MongoClusterBiConnector</a>

bi_connector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#bi_connector MongoCluster#bi_connector}

---

##### `cores`<sup>Optional</sup> <a name="cores" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.cores"></a>

```python
cores: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of CPU cores per instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#cores MongoCluster#cores}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.edition"></a>

```python
edition: str
```

- *Type:* str

The cluster edition. Must be one of: playground, business, enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#edition MongoCluster#edition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#id MongoCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.maintenanceWindow"></a>

```python
maintenance_window: MongoClusterMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindow">MongoClusterMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#maintenance_window MongoCluster#maintenance_window}

---

##### `ram`<sup>Optional</sup> <a name="ram" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.ram"></a>

```python
ram: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of memory per instance in megabytes. Multiple of 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#ram MongoCluster#ram}

---

##### `shards`<sup>Optional</sup> <a name="shards" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.shards"></a>

```python
shards: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The total number of shards in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#shards MongoCluster#shards}

---

##### `storage_size`<sup>Optional</sup> <a name="storage_size" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.storageSize"></a>

```python
storage_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of storage per instance in megabytes. At least 5120, at most 2097152.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#storage_size MongoCluster#storage_size}

---

##### `storage_type`<sup>Optional</sup> <a name="storage_type" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

The storage type. One of : HDD, SSD, SSD Standard, SSD Premium.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#storage_type MongoCluster#storage_type}

---

##### `template_id`<sup>Optional</sup> <a name="template_id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.templateId"></a>

```python
template_id: str
```

- *Type:* str

The unique ID of the template, which specifies the number of cores, storage size, and memory.

You cannot downgrade to a smaller template or minor edition (e.g. from business to playground). To get a list of all templates to confirm the changes use the /templates endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#template_id MongoCluster#template_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.timeouts"></a>

```python
timeouts: MongoClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#timeouts MongoCluster#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The cluster type, either `replicaset` or `sharded-cluster`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#type MongoCluster#type}

---

### MongoClusterConnections <a name="MongoClusterConnections" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import mongo_cluster

mongoCluster.MongoClusterConnections(
  cidr_list: typing.List[str],
  datacenter_id: str,
  lan_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections.property.cidrList">cidr_list</a></code> | <code>typing.List[str]</code> | The list of IPs and subnet for your cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections.property.datacenterId">datacenter_id</a></code> | <code>str</code> | The datacenter to connect your cluster to. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections.property.lanId">lan_id</a></code> | <code>str</code> | The LAN to connect your cluster to. |

---

##### `cidr_list`<sup>Required</sup> <a name="cidr_list" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections.property.cidrList"></a>

```python
cidr_list: typing.List[str]
```

- *Type:* typing.List[str]

The list of IPs and subnet for your cluster.

Note the following unavailable IP ranges:10.233.64.0/18, 10.233.0.0/18, 10.233.114.0/24. example: [192.168.1.100/24, 192.168.1.101/24]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#cidr_list MongoCluster#cidr_list}

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

The datacenter to connect your cluster to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#datacenter_id MongoCluster#datacenter_id}

---

##### `lan_id`<sup>Required</sup> <a name="lan_id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections.property.lanId"></a>

```python
lan_id: str
```

- *Type:* str

The LAN to connect your cluster to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#lan_id MongoCluster#lan_id}

---

### MongoClusterMaintenanceWindow <a name="MongoClusterMaintenanceWindow" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import mongo_cluster

mongoCluster.MongoClusterMaintenanceWindow(
  day_of_the_week: str,
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindow.property.dayOfTheWeek">day_of_the_week</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#day_of_the_week MongoCluster#day_of_the_week}. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindow.property.time">time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#time MongoCluster#time}. |

---

##### `day_of_the_week`<sup>Required</sup> <a name="day_of_the_week" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindow.property.dayOfTheWeek"></a>

```python
day_of_the_week: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#day_of_the_week MongoCluster#day_of_the_week}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindow.property.time"></a>

```python
time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#time MongoCluster#time}.

---

### MongoClusterTimeouts <a name="MongoClusterTimeouts" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import mongo_cluster

mongoCluster.MongoClusterTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#create MongoCluster#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#default MongoCluster#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#delete MongoCluster#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#update MongoCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#create MongoCluster#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#default MongoCluster#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#delete MongoCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/mongo_cluster#update MongoCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MongoClusterBackupOutputReference <a name="MongoClusterBackupOutputReference" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import mongo_cluster

mongoCluster.MongoClusterBackupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.resetPointInTimeWindowHours">reset_point_in_time_window_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.resetSnapshotIntervalHours">reset_snapshot_interval_hours</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_location` <a name="reset_location" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_point_in_time_window_hours` <a name="reset_point_in_time_window_hours" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.resetPointInTimeWindowHours"></a>

```python
def reset_point_in_time_window_hours() -> None
```

##### `reset_snapshot_interval_hours` <a name="reset_snapshot_interval_hours" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.resetSnapshotIntervalHours"></a>

```python
def reset_snapshot_interval_hours() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.pointInTimeWindowHoursInput">point_in_time_window_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.snapshotIntervalHoursInput">snapshot_interval_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.pointInTimeWindowHours">point_in_time_window_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.snapshotIntervalHours">snapshot_interval_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup">MongoClusterBackup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `point_in_time_window_hours_input`<sup>Optional</sup> <a name="point_in_time_window_hours_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.pointInTimeWindowHoursInput"></a>

```python
point_in_time_window_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_interval_hours_input`<sup>Optional</sup> <a name="snapshot_interval_hours_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.snapshotIntervalHoursInput"></a>

```python
snapshot_interval_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `point_in_time_window_hours`<sup>Required</sup> <a name="point_in_time_window_hours" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.pointInTimeWindowHours"></a>

```python
point_in_time_window_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_interval_hours`<sup>Required</sup> <a name="snapshot_interval_hours" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.snapshotIntervalHours"></a>

```python
snapshot_interval_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.internalValue"></a>

```python
internal_value: MongoClusterBackup
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup">MongoClusterBackup</a>

---


### MongoClusterBiConnectorOutputReference <a name="MongoClusterBiConnectorOutputReference" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import mongo_cluster

mongoCluster.MongoClusterBiConnectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnector">MongoClusterBiConnector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.property.internalValue"></a>

```python
internal_value: MongoClusterBiConnector
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnector">MongoClusterBiConnector</a>

---


### MongoClusterConnectionsOutputReference <a name="MongoClusterConnectionsOutputReference" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import mongo_cluster

mongoCluster.MongoClusterConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.cidrListInput">cidr_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.datacenterIdInput">datacenter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.lanIdInput">lan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.cidrList">cidr_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.datacenterId">datacenter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.lanId">lan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections">MongoClusterConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_list_input`<sup>Optional</sup> <a name="cidr_list_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.cidrListInput"></a>

```python
cidr_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `datacenter_id_input`<sup>Optional</sup> <a name="datacenter_id_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.datacenterIdInput"></a>

```python
datacenter_id_input: str
```

- *Type:* str

---

##### `lan_id_input`<sup>Optional</sup> <a name="lan_id_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.lanIdInput"></a>

```python
lan_id_input: str
```

- *Type:* str

---

##### `cidr_list`<sup>Required</sup> <a name="cidr_list" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.cidrList"></a>

```python
cidr_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

---

##### `lan_id`<sup>Required</sup> <a name="lan_id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.lanId"></a>

```python
lan_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: MongoClusterConnections
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections">MongoClusterConnections</a>

---


### MongoClusterMaintenanceWindowOutputReference <a name="MongoClusterMaintenanceWindowOutputReference" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import mongo_cluster

mongoCluster.MongoClusterMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.property.dayOfTheWeekInput">day_of_the_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.property.dayOfTheWeek">day_of_the_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindow">MongoClusterMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_the_week_input`<sup>Optional</sup> <a name="day_of_the_week_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.property.dayOfTheWeekInput"></a>

```python
day_of_the_week_input: str
```

- *Type:* str

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `day_of_the_week`<sup>Required</sup> <a name="day_of_the_week" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.property.dayOfTheWeek"></a>

```python
day_of_the_week: str
```

- *Type:* str

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: MongoClusterMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindow">MongoClusterMaintenanceWindow</a>

---


### MongoClusterTimeoutsOutputReference <a name="MongoClusterTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import mongo_cluster

mongoCluster.MongoClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MongoClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a>]

---



