# `s3ObjectCopy` Submodule <a name="`s3ObjectCopy` Submodule" id="@cdktf/provider-ionoscloud.s3ObjectCopy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ObjectCopy <a name="S3ObjectCopy" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy ionoscloud_s3_object_copy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/s3objectcopy"

s3objectcopy.NewS3ObjectCopy(scope Construct, id *string, config S3ObjectCopyConfig) S3ObjectCopy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig">S3ObjectCopyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig">S3ObjectCopyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCacheControl">ResetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentDisposition">ResetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentEncoding">ResetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentLanguage">ResetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfMatch">ResetCopyIfMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfModifiedSince">ResetCopyIfModifiedSince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfNoneMatch">ResetCopyIfNoneMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfUnmodifiedSince">ResetCopyIfUnmodifiedSince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetExpires">ResetExpires</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetMetadataDirective">ResetMetadataDirective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockLegalHold">ResetObjectLockLegalHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockMode">ResetObjectLockMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockRetainUntilDate">ResetObjectLockRetainUntilDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryption">ResetServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerAlgorithm">ResetServerSideEncryptionCustomerAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerKey">ResetServerSideEncryptionCustomerKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerKeyMd5">ResetServerSideEncryptionCustomerKeyMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerAlgorithm">ResetSourceCustomerAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKey">ResetSourceCustomerKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKeyMd5">ResetSourceCustomerKeyMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetStorageClass">ResetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetTaggingDirective">ResetTaggingDirective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetWebsiteRedirect">ResetWebsiteRedirect</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCacheControl` <a name="ResetCacheControl" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCacheControl"></a>

```go
func ResetCacheControl()
```

##### `ResetContentDisposition` <a name="ResetContentDisposition" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentDisposition"></a>

```go
func ResetContentDisposition()
```

##### `ResetContentEncoding` <a name="ResetContentEncoding" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentEncoding"></a>

```go
func ResetContentEncoding()
```

##### `ResetContentLanguage` <a name="ResetContentLanguage" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentLanguage"></a>

```go
func ResetContentLanguage()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentType"></a>

```go
func ResetContentType()
```

##### `ResetCopyIfMatch` <a name="ResetCopyIfMatch" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfMatch"></a>

```go
func ResetCopyIfMatch()
```

##### `ResetCopyIfModifiedSince` <a name="ResetCopyIfModifiedSince" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfModifiedSince"></a>

```go
func ResetCopyIfModifiedSince()
```

##### `ResetCopyIfNoneMatch` <a name="ResetCopyIfNoneMatch" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfNoneMatch"></a>

```go
func ResetCopyIfNoneMatch()
```

##### `ResetCopyIfUnmodifiedSince` <a name="ResetCopyIfUnmodifiedSince" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfUnmodifiedSince"></a>

```go
func ResetCopyIfUnmodifiedSince()
```

##### `ResetExpires` <a name="ResetExpires" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetExpires"></a>

```go
func ResetExpires()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetForceDestroy"></a>

```go
func ResetForceDestroy()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetMetadataDirective` <a name="ResetMetadataDirective" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetMetadataDirective"></a>

```go
func ResetMetadataDirective()
```

##### `ResetObjectLockLegalHold` <a name="ResetObjectLockLegalHold" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockLegalHold"></a>

```go
func ResetObjectLockLegalHold()
```

##### `ResetObjectLockMode` <a name="ResetObjectLockMode" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockMode"></a>

```go
func ResetObjectLockMode()
```

##### `ResetObjectLockRetainUntilDate` <a name="ResetObjectLockRetainUntilDate" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockRetainUntilDate"></a>

```go
func ResetObjectLockRetainUntilDate()
```

##### `ResetServerSideEncryption` <a name="ResetServerSideEncryption" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryption"></a>

```go
func ResetServerSideEncryption()
```

##### `ResetServerSideEncryptionCustomerAlgorithm` <a name="ResetServerSideEncryptionCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerAlgorithm"></a>

```go
func ResetServerSideEncryptionCustomerAlgorithm()
```

##### `ResetServerSideEncryptionCustomerKey` <a name="ResetServerSideEncryptionCustomerKey" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerKey"></a>

```go
func ResetServerSideEncryptionCustomerKey()
```

##### `ResetServerSideEncryptionCustomerKeyMd5` <a name="ResetServerSideEncryptionCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerKeyMd5"></a>

```go
func ResetServerSideEncryptionCustomerKeyMd5()
```

##### `ResetSourceCustomerAlgorithm` <a name="ResetSourceCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerAlgorithm"></a>

```go
func ResetSourceCustomerAlgorithm()
```

##### `ResetSourceCustomerKey` <a name="ResetSourceCustomerKey" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKey"></a>

```go
func ResetSourceCustomerKey()
```

##### `ResetSourceCustomerKeyMd5` <a name="ResetSourceCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKeyMd5"></a>

```go
func ResetSourceCustomerKeyMd5()
```

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetStorageClass"></a>

```go
func ResetStorageClass()
```

##### `ResetTaggingDirective` <a name="ResetTaggingDirective" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetTaggingDirective"></a>

```go
func ResetTaggingDirective()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetTags"></a>

```go
func ResetTags()
```

##### `ResetWebsiteRedirect` <a name="ResetWebsiteRedirect" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetWebsiteRedirect"></a>

```go
func ResetWebsiteRedirect()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a S3ObjectCopy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/s3objectcopy"

s3objectcopy.S3ObjectCopy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/s3objectcopy"

s3objectcopy.S3ObjectCopy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/s3objectcopy"

s3objectcopy.S3ObjectCopy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/s3objectcopy"

s3objectcopy.S3ObjectCopy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a S3ObjectCopy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the S3ObjectCopy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing S3ObjectCopy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the S3ObjectCopy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cacheControlInput">CacheControlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentDispositionInput">ContentDispositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentEncodingInput">ContentEncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentLanguageInput">ContentLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfMatchInput">CopyIfMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSinceInput">CopyIfModifiedSinceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatchInput">CopyIfNoneMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSinceInput">CopyIfUnmodifiedSinceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.expiresInput">ExpiresInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataDirectiveInput">MetadataDirectiveInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldInput">ObjectLockLegalHoldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockModeInput">ObjectLockModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDateInput">ObjectLockRetainUntilDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerAlgorithmInput">ServerSideEncryptionCustomerAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyInput">ServerSideEncryptionCustomerKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyMd5Input">ServerSideEncryptionCustomerKeyMd5Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionInput">ServerSideEncryptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithmInput">SourceCustomerAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyInput">SourceCustomerKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5Input">SourceCustomerKeyMd5Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.storageClassInput">StorageClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.taggingDirectiveInput">TaggingDirectiveInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.websiteRedirectInput">WebsiteRedirectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cacheControl">CacheControl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentDisposition">ContentDisposition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentEncoding">ContentEncoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentLanguage">ContentLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfMatch">CopyIfMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSince">CopyIfModifiedSince</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatch">CopyIfNoneMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSince">CopyIfUnmodifiedSince</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.expires">Expires</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataDirective">MetadataDirective</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHold">ObjectLockLegalHold</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockMode">ObjectLockMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDate">ObjectLockRetainUntilDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryption">ServerSideEncryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerAlgorithm">ServerSideEncryptionCustomerAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKey">ServerSideEncryptionCustomerKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyMd5">ServerSideEncryptionCustomerKeyMd5</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithm">SourceCustomerAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKey">SourceCustomerKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5">SourceCustomerKeyMd5</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.storageClass">StorageClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.taggingDirective">TaggingDirective</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.websiteRedirect">WebsiteRedirect</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `CacheControlInput`<sup>Optional</sup> <a name="CacheControlInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cacheControlInput"></a>

```go
func CacheControlInput() *string
```

- *Type:* *string

---

##### `ContentDispositionInput`<sup>Optional</sup> <a name="ContentDispositionInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentDispositionInput"></a>

```go
func ContentDispositionInput() *string
```

- *Type:* *string

---

##### `ContentEncodingInput`<sup>Optional</sup> <a name="ContentEncodingInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentEncodingInput"></a>

```go
func ContentEncodingInput() *string
```

- *Type:* *string

---

##### `ContentLanguageInput`<sup>Optional</sup> <a name="ContentLanguageInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentLanguageInput"></a>

```go
func ContentLanguageInput() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `CopyIfMatchInput`<sup>Optional</sup> <a name="CopyIfMatchInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfMatchInput"></a>

```go
func CopyIfMatchInput() *string
```

- *Type:* *string

---

##### `CopyIfModifiedSinceInput`<sup>Optional</sup> <a name="CopyIfModifiedSinceInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSinceInput"></a>

```go
func CopyIfModifiedSinceInput() *string
```

- *Type:* *string

---

##### `CopyIfNoneMatchInput`<sup>Optional</sup> <a name="CopyIfNoneMatchInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatchInput"></a>

```go
func CopyIfNoneMatchInput() *string
```

- *Type:* *string

---

##### `CopyIfUnmodifiedSinceInput`<sup>Optional</sup> <a name="CopyIfUnmodifiedSinceInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSinceInput"></a>

```go
func CopyIfUnmodifiedSinceInput() *string
```

- *Type:* *string

---

##### `ExpiresInput`<sup>Optional</sup> <a name="ExpiresInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.expiresInput"></a>

```go
func ExpiresInput() *string
```

- *Type:* *string

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forceDestroyInput"></a>

```go
func ForceDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MetadataDirectiveInput`<sup>Optional</sup> <a name="MetadataDirectiveInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataDirectiveInput"></a>

```go
func MetadataDirectiveInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ObjectLockLegalHoldInput`<sup>Optional</sup> <a name="ObjectLockLegalHoldInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldInput"></a>

```go
func ObjectLockLegalHoldInput() *string
```

- *Type:* *string

---

##### `ObjectLockModeInput`<sup>Optional</sup> <a name="ObjectLockModeInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockModeInput"></a>

```go
func ObjectLockModeInput() *string
```

- *Type:* *string

---

##### `ObjectLockRetainUntilDateInput`<sup>Optional</sup> <a name="ObjectLockRetainUntilDateInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDateInput"></a>

```go
func ObjectLockRetainUntilDateInput() *string
```

- *Type:* *string

---

##### `ServerSideEncryptionCustomerAlgorithmInput`<sup>Optional</sup> <a name="ServerSideEncryptionCustomerAlgorithmInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerAlgorithmInput"></a>

```go
func ServerSideEncryptionCustomerAlgorithmInput() *string
```

- *Type:* *string

---

##### `ServerSideEncryptionCustomerKeyInput`<sup>Optional</sup> <a name="ServerSideEncryptionCustomerKeyInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyInput"></a>

```go
func ServerSideEncryptionCustomerKeyInput() *string
```

- *Type:* *string

---

##### `ServerSideEncryptionCustomerKeyMd5Input`<sup>Optional</sup> <a name="ServerSideEncryptionCustomerKeyMd5Input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyMd5Input"></a>

```go
func ServerSideEncryptionCustomerKeyMd5Input() *string
```

- *Type:* *string

---

##### `ServerSideEncryptionInput`<sup>Optional</sup> <a name="ServerSideEncryptionInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionInput"></a>

```go
func ServerSideEncryptionInput() *string
```

- *Type:* *string

---

##### `SourceCustomerAlgorithmInput`<sup>Optional</sup> <a name="SourceCustomerAlgorithmInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithmInput"></a>

```go
func SourceCustomerAlgorithmInput() *string
```

- *Type:* *string

---

##### `SourceCustomerKeyInput`<sup>Optional</sup> <a name="SourceCustomerKeyInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyInput"></a>

```go
func SourceCustomerKeyInput() *string
```

- *Type:* *string

---

##### `SourceCustomerKeyMd5Input`<sup>Optional</sup> <a name="SourceCustomerKeyMd5Input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5Input"></a>

```go
func SourceCustomerKeyMd5Input() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.storageClassInput"></a>

```go
func StorageClassInput() *string
```

- *Type:* *string

---

##### `TaggingDirectiveInput`<sup>Optional</sup> <a name="TaggingDirectiveInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.taggingDirectiveInput"></a>

```go
func TaggingDirectiveInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WebsiteRedirectInput`<sup>Optional</sup> <a name="WebsiteRedirectInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.websiteRedirectInput"></a>

```go
func WebsiteRedirectInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `CacheControl`<sup>Required</sup> <a name="CacheControl" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cacheControl"></a>

```go
func CacheControl() *string
```

- *Type:* *string

---

##### `ContentDisposition`<sup>Required</sup> <a name="ContentDisposition" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentDisposition"></a>

```go
func ContentDisposition() *string
```

- *Type:* *string

---

##### `ContentEncoding`<sup>Required</sup> <a name="ContentEncoding" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentEncoding"></a>

```go
func ContentEncoding() *string
```

- *Type:* *string

---

##### `ContentLanguage`<sup>Required</sup> <a name="ContentLanguage" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentLanguage"></a>

```go
func ContentLanguage() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `CopyIfMatch`<sup>Required</sup> <a name="CopyIfMatch" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfMatch"></a>

```go
func CopyIfMatch() *string
```

- *Type:* *string

---

##### `CopyIfModifiedSince`<sup>Required</sup> <a name="CopyIfModifiedSince" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSince"></a>

```go
func CopyIfModifiedSince() *string
```

- *Type:* *string

---

##### `CopyIfNoneMatch`<sup>Required</sup> <a name="CopyIfNoneMatch" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatch"></a>

```go
func CopyIfNoneMatch() *string
```

- *Type:* *string

---

##### `CopyIfUnmodifiedSince`<sup>Required</sup> <a name="CopyIfUnmodifiedSince" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSince"></a>

```go
func CopyIfUnmodifiedSince() *string
```

- *Type:* *string

---

##### `Expires`<sup>Required</sup> <a name="Expires" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.expires"></a>

```go
func Expires() *string
```

- *Type:* *string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forceDestroy"></a>

```go
func ForceDestroy() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MetadataDirective`<sup>Required</sup> <a name="MetadataDirective" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataDirective"></a>

```go
func MetadataDirective() *string
```

- *Type:* *string

---

##### `ObjectLockLegalHold`<sup>Required</sup> <a name="ObjectLockLegalHold" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHold"></a>

```go
func ObjectLockLegalHold() *string
```

- *Type:* *string

---

##### `ObjectLockMode`<sup>Required</sup> <a name="ObjectLockMode" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockMode"></a>

```go
func ObjectLockMode() *string
```

- *Type:* *string

---

##### `ObjectLockRetainUntilDate`<sup>Required</sup> <a name="ObjectLockRetainUntilDate" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDate"></a>

```go
func ObjectLockRetainUntilDate() *string
```

- *Type:* *string

---

##### `ServerSideEncryption`<sup>Required</sup> <a name="ServerSideEncryption" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryption"></a>

```go
func ServerSideEncryption() *string
```

- *Type:* *string

---

##### `ServerSideEncryptionCustomerAlgorithm`<sup>Required</sup> <a name="ServerSideEncryptionCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerAlgorithm"></a>

```go
func ServerSideEncryptionCustomerAlgorithm() *string
```

- *Type:* *string

---

##### `ServerSideEncryptionCustomerKey`<sup>Required</sup> <a name="ServerSideEncryptionCustomerKey" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKey"></a>

```go
func ServerSideEncryptionCustomerKey() *string
```

- *Type:* *string

---

##### `ServerSideEncryptionCustomerKeyMd5`<sup>Required</sup> <a name="ServerSideEncryptionCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyMd5"></a>

```go
func ServerSideEncryptionCustomerKeyMd5() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `SourceCustomerAlgorithm`<sup>Required</sup> <a name="SourceCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithm"></a>

```go
func SourceCustomerAlgorithm() *string
```

- *Type:* *string

---

##### `SourceCustomerKey`<sup>Required</sup> <a name="SourceCustomerKey" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKey"></a>

```go
func SourceCustomerKey() *string
```

- *Type:* *string

---

##### `SourceCustomerKeyMd5`<sup>Required</sup> <a name="SourceCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5"></a>

```go
func SourceCustomerKeyMd5() *string
```

- *Type:* *string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.storageClass"></a>

```go
func StorageClass() *string
```

- *Type:* *string

---

##### `TaggingDirective`<sup>Required</sup> <a name="TaggingDirective" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.taggingDirective"></a>

```go
func TaggingDirective() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WebsiteRedirect`<sup>Required</sup> <a name="WebsiteRedirect" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.websiteRedirect"></a>

```go
func WebsiteRedirect() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ObjectCopyConfig <a name="S3ObjectCopyConfig" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/s3objectcopy"

&s3objectcopy.S3ObjectCopyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Bucket: *string,
	Key: *string,
	Source: *string,
	CacheControl: *string,
	ContentDisposition: *string,
	ContentEncoding: *string,
	ContentLanguage: *string,
	ContentType: *string,
	CopyIfMatch: *string,
	CopyIfModifiedSince: *string,
	CopyIfNoneMatch: *string,
	CopyIfUnmodifiedSince: *string,
	Expires: *string,
	ForceDestroy: interface{},
	Metadata: *map[string]*string,
	MetadataDirective: *string,
	ObjectLockLegalHold: *string,
	ObjectLockMode: *string,
	ObjectLockRetainUntilDate: *string,
	ServerSideEncryption: *string,
	ServerSideEncryptionCustomerAlgorithm: *string,
	ServerSideEncryptionCustomerKey: *string,
	ServerSideEncryptionCustomerKeyMd5: *string,
	SourceCustomerAlgorithm: *string,
	SourceCustomerKey: *string,
	SourceCustomerKeyMd5: *string,
	StorageClass: *string,
	TaggingDirective: *string,
	Tags: *map[string]*string,
	WebsiteRedirect: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.bucket">Bucket</a></code> | <code>*string</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.key">Key</a></code> | <code>*string</code> | The key of the object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.source">Source</a></code> | <code>*string</code> | The key of the source object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.cacheControl">CacheControl</a></code> | <code>*string</code> | Can be used to specify caching behavior along the request/reply chain. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentDisposition">ContentDisposition</a></code> | <code>*string</code> | Specifies presentational information for the object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentEncoding">ContentEncoding</a></code> | <code>*string</code> | Specifies what content encodings have been applied to the object copy and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentLanguage">ContentLanguage</a></code> | <code>*string</code> | The natural language or languages of the intended audience for the object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentType">ContentType</a></code> | <code>*string</code> | A standard MIME type describing the format of the contents. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfMatch">CopyIfMatch</a></code> | <code>*string</code> | Copies the object if its entity tag (ETag) matches the specified tag. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfModifiedSince">CopyIfModifiedSince</a></code> | <code>*string</code> | Copies the object if it has been modified since the specified time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfNoneMatch">CopyIfNoneMatch</a></code> | <code>*string</code> | Copies the object if its entity tag (ETag) is different than the specified ETag. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfUnmodifiedSince">CopyIfUnmodifiedSince</a></code> | <code>*string</code> | Copies the object if it hasn't been modified since the specified time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.expires">Expires</a></code> | <code>*string</code> | The date and time at which the object copy is no longer cacheable. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | Specifies whether to delete the object copy even if it has a governance-type Object Copy Lock in place. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | A map of metadata to store with the object copy in IONOS S3 Object Copy Storage. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.metadataDirective">MetadataDirective</a></code> | <code>*string</code> | Specifies whether the metadata is copied from the source object or replaced with metadata provided in the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockLegalHold">ObjectLockLegalHold</a></code> | <code>*string</code> | Specifies whether a legal hold will be applied to this object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockMode">ObjectLockMode</a></code> | <code>*string</code> | Confirms that the requester knows that they will be charged for the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockRetainUntilDate">ObjectLockRetainUntilDate</a></code> | <code>*string</code> | The date and time when you want this object copy's Object Copy Lock to expire. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryption">ServerSideEncryption</a></code> | <code>*string</code> | The server-side encryption algorithm used when storing this object copy in IONOS S3 Object Copy Storage (AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerAlgorithm">ServerSideEncryptionCustomerAlgorithm</a></code> | <code>*string</code> | Specifies the algorithm to use to when encrypting the object copy (e.g., AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerKey">ServerSideEncryptionCustomerKey</a></code> | <code>*string</code> | Specifies the 256-bit, base64-encoded encryption key to use to encrypt and decrypt your data. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerKeyMd5">ServerSideEncryptionCustomerKeyMd5</a></code> | <code>*string</code> | Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerAlgorithm">SourceCustomerAlgorithm</a></code> | <code>*string</code> | Specifies the algorithm to use to when decrypting the source object (e.g., AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKey">SourceCustomerKey</a></code> | <code>*string</code> | Specifies the 256-bit, base64-encoded encryption key to use to decrypt the source object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKeyMd5">SourceCustomerKeyMd5</a></code> | <code>*string</code> | Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.storageClass">StorageClass</a></code> | <code>*string</code> | The storage class of the object copy. Valid value is 'STANDARD'. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.taggingDirective">TaggingDirective</a></code> | <code>*string</code> | Specifies whether the object copy tag-set is copied from the source object or replaced with tag-set provided in the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | The tag-set for the object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.websiteRedirect">WebsiteRedirect</a></code> | <code>*string</code> | If the bucket is configured as a website, redirects requests for this object copy to another object copy in the same bucket or to an external URL. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#bucket S3ObjectCopy#bucket}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key of the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#key S3ObjectCopy#key}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.source"></a>

```go
Source *string
```

- *Type:* *string

The key of the source object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#source S3ObjectCopy#source}

---

##### `CacheControl`<sup>Optional</sup> <a name="CacheControl" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.cacheControl"></a>

```go
CacheControl *string
```

- *Type:* *string

Can be used to specify caching behavior along the request/reply chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#cache_control S3ObjectCopy#cache_control}

---

##### `ContentDisposition`<sup>Optional</sup> <a name="ContentDisposition" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentDisposition"></a>

```go
ContentDisposition *string
```

- *Type:* *string

Specifies presentational information for the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#content_disposition S3ObjectCopy#content_disposition}

---

##### `ContentEncoding`<sup>Optional</sup> <a name="ContentEncoding" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentEncoding"></a>

```go
ContentEncoding *string
```

- *Type:* *string

Specifies what content encodings have been applied to the object copy and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#content_encoding S3ObjectCopy#content_encoding}

---

##### `ContentLanguage`<sup>Optional</sup> <a name="ContentLanguage" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentLanguage"></a>

```go
ContentLanguage *string
```

- *Type:* *string

The natural language or languages of the intended audience for the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#content_language S3ObjectCopy#content_language}

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

A standard MIME type describing the format of the contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#content_type S3ObjectCopy#content_type}

---

##### `CopyIfMatch`<sup>Optional</sup> <a name="CopyIfMatch" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfMatch"></a>

```go
CopyIfMatch *string
```

- *Type:* *string

Copies the object if its entity tag (ETag) matches the specified tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#copy_if_match S3ObjectCopy#copy_if_match}

---

##### `CopyIfModifiedSince`<sup>Optional</sup> <a name="CopyIfModifiedSince" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfModifiedSince"></a>

```go
CopyIfModifiedSince *string
```

- *Type:* *string

Copies the object if it has been modified since the specified time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#copy_if_modified_since S3ObjectCopy#copy_if_modified_since}

---

##### `CopyIfNoneMatch`<sup>Optional</sup> <a name="CopyIfNoneMatch" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfNoneMatch"></a>

```go
CopyIfNoneMatch *string
```

- *Type:* *string

Copies the object if its entity tag (ETag) is different than the specified ETag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#copy_if_none_match S3ObjectCopy#copy_if_none_match}

---

##### `CopyIfUnmodifiedSince`<sup>Optional</sup> <a name="CopyIfUnmodifiedSince" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfUnmodifiedSince"></a>

```go
CopyIfUnmodifiedSince *string
```

- *Type:* *string

Copies the object if it hasn't been modified since the specified time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#copy_if_unmodified_since S3ObjectCopy#copy_if_unmodified_since}

---

##### `Expires`<sup>Optional</sup> <a name="Expires" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.expires"></a>

```go
Expires *string
```

- *Type:* *string

The date and time at which the object copy is no longer cacheable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#expires S3ObjectCopy#expires}

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.forceDestroy"></a>

```go
ForceDestroy interface{}
```

- *Type:* interface{}

Specifies whether to delete the object copy even if it has a governance-type Object Copy Lock in place.

You must explicitly pass a value of true for this parameter to delete the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#force_destroy S3ObjectCopy#force_destroy}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

A map of metadata to store with the object copy in IONOS S3 Object Copy Storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#metadata S3ObjectCopy#metadata}

---

##### `MetadataDirective`<sup>Optional</sup> <a name="MetadataDirective" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.metadataDirective"></a>

```go
MetadataDirective *string
```

- *Type:* *string

Specifies whether the metadata is copied from the source object or replaced with metadata provided in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#metadata_directive S3ObjectCopy#metadata_directive}

---

##### `ObjectLockLegalHold`<sup>Optional</sup> <a name="ObjectLockLegalHold" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockLegalHold"></a>

```go
ObjectLockLegalHold *string
```

- *Type:* *string

Specifies whether a legal hold will be applied to this object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#object_lock_legal_hold S3ObjectCopy#object_lock_legal_hold}

---

##### `ObjectLockMode`<sup>Optional</sup> <a name="ObjectLockMode" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockMode"></a>

```go
ObjectLockMode *string
```

- *Type:* *string

Confirms that the requester knows that they will be charged for the request.

Bucket owners need not specify this parameter in their requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#object_lock_mode S3ObjectCopy#object_lock_mode}

---

##### `ObjectLockRetainUntilDate`<sup>Optional</sup> <a name="ObjectLockRetainUntilDate" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockRetainUntilDate"></a>

```go
ObjectLockRetainUntilDate *string
```

- *Type:* *string

The date and time when you want this object copy's Object Copy Lock to expire.

Must be formatted as a timestamp parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#object_lock_retain_until_date S3ObjectCopy#object_lock_retain_until_date}

---

##### `ServerSideEncryption`<sup>Optional</sup> <a name="ServerSideEncryption" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryption"></a>

```go
ServerSideEncryption *string
```

- *Type:* *string

The server-side encryption algorithm used when storing this object copy in IONOS S3 Object Copy Storage (AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#server_side_encryption S3ObjectCopy#server_side_encryption}

---

##### `ServerSideEncryptionCustomerAlgorithm`<sup>Optional</sup> <a name="ServerSideEncryptionCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerAlgorithm"></a>

```go
ServerSideEncryptionCustomerAlgorithm *string
```

- *Type:* *string

Specifies the algorithm to use to when encrypting the object copy (e.g., AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#server_side_encryption_customer_algorithm S3ObjectCopy#server_side_encryption_customer_algorithm}

---

##### `ServerSideEncryptionCustomerKey`<sup>Optional</sup> <a name="ServerSideEncryptionCustomerKey" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerKey"></a>

```go
ServerSideEncryptionCustomerKey *string
```

- *Type:* *string

Specifies the 256-bit, base64-encoded encryption key to use to encrypt and decrypt your data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#server_side_encryption_customer_key S3ObjectCopy#server_side_encryption_customer_key}

---

##### `ServerSideEncryptionCustomerKeyMd5`<sup>Optional</sup> <a name="ServerSideEncryptionCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerKeyMd5"></a>

```go
ServerSideEncryptionCustomerKeyMd5 *string
```

- *Type:* *string

Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321.

IONOS S3 Object Copy Storage uses this header for a message integrity check  to ensure that the encryption key was transmitted without error

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#server_side_encryption_customer_key_md5 S3ObjectCopy#server_side_encryption_customer_key_md5}

---

##### `SourceCustomerAlgorithm`<sup>Optional</sup> <a name="SourceCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerAlgorithm"></a>

```go
SourceCustomerAlgorithm *string
```

- *Type:* *string

Specifies the algorithm to use to when decrypting the source object (e.g., AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#source_customer_algorithm S3ObjectCopy#source_customer_algorithm}

---

##### `SourceCustomerKey`<sup>Optional</sup> <a name="SourceCustomerKey" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKey"></a>

```go
SourceCustomerKey *string
```

- *Type:* *string

Specifies the 256-bit, base64-encoded encryption key to use to decrypt the source object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#source_customer_key S3ObjectCopy#source_customer_key}

---

##### `SourceCustomerKeyMd5`<sup>Optional</sup> <a name="SourceCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKeyMd5"></a>

```go
SourceCustomerKeyMd5 *string
```

- *Type:* *string

Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321.

IONOS S3 Object Copy Storage uses this header for a message integrity check  to ensure that the encryption key was transmitted without error

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#source_customer_key_md5 S3ObjectCopy#source_customer_key_md5}

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.storageClass"></a>

```go
StorageClass *string
```

- *Type:* *string

The storage class of the object copy. Valid value is 'STANDARD'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#storage_class S3ObjectCopy#storage_class}

---

##### `TaggingDirective`<sup>Optional</sup> <a name="TaggingDirective" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.taggingDirective"></a>

```go
TaggingDirective *string
```

- *Type:* *string

Specifies whether the object copy tag-set is copied from the source object or replaced with tag-set provided in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#tagging_directive S3ObjectCopy#tagging_directive}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

The tag-set for the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#tags S3ObjectCopy#tags}

---

##### `WebsiteRedirect`<sup>Optional</sup> <a name="WebsiteRedirect" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.websiteRedirect"></a>

```go
WebsiteRedirect *string
```

- *Type:* *string

If the bucket is configured as a website, redirects requests for this object copy to another object copy in the same bucket or to an external URL.

IONOS S3 Object Copy Storage stores the value of this header in the object copy metadata

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/s3_object_copy#website_redirect S3ObjectCopy#website_redirect}

---



